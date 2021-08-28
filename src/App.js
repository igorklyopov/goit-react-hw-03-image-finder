import React, { Component } from "react";
import { theme } from "./StyledCommon";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import SearchForm from "./components/SearchForm";
import Section from "./components/Section";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { IMAGES_PER_PAGE, fetchImages } from "./services/fetchImages";
import showGalleryLoader from "./utils/showGalleryLoader";
import scrollDown from "./utils/scrollDown";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class App extends Component {
  state = {
    searchQuery: "",
    pageNumber: 1,
    images: [],
    moreImagesPerPage: false,
    status: Status.IDLE,
    error: null,
  };

  static propTypes = {};

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: Status.PENDING, pageNumber: 1 });

      this.getImages(searchQuery, pageNumber);
    }
  }

  getImages = (searchQuery, pageNumber) => {
    fetchImages(searchQuery, pageNumber)
      .then((images) => {
        this.setState({ images: images.hits, status: Status.RESOLVED });

        if (images.total === 0) {
          this.setState({
            status: Status.REJECTED,
            error: "No images for this request!",
          });
          return;
        }

        if (images.total > IMAGES_PER_PAGE) {
          this.setState({ moreImagesPerPage: true });
        }

        if (pageNumber > 1) {
          scrollDown();
        }
      })
      .catch((error) =>
        this.setState({ error: error.message, status: Status.REJECTED })
      );
  };

  onSearchFormSubmit = (searchQuery) => {
    this.setState({ searchQuery, pageNumber: 1 });

    if (searchQuery === "") {
      this.setState({
        status: Status.REJECTED,
        error: "Please enter your request!",
      });
    }
  };

  onLoadMoreBtnClick = () => {
    const { searchQuery, pageNumber } = this.state;

    this.setState({
      status: Status.PENDING,
      pageNumber: pageNumber + 1,
    });
    this.getImages(searchQuery, pageNumber + 1);
  };

  render() {
    const { images, moreImagesPerPage, status, error } = this.state;

    return (
      <>
        <Searchbar>
          <SearchForm getFormData={this.onSearchFormSubmit} />
        </Searchbar>
        <Section theme={theme}>
          <Container>
            {status === "pending" && showGalleryLoader()}
            {status === "rejected" && <p>{error}</p>}
            {status === "resolved" && (
              <>
                <ImageGallery images={images} />
                {moreImagesPerPage && (
                  <Button
                    label="Load more"
                    onLoadMoreBtnClick={this.onLoadMoreBtnClick}
                  />
                )}
              </>
            )}
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
