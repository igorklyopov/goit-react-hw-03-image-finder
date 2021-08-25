import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { theme } from "./StyledCommon";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import SearchForm from "./components/SearchForm";
import Section from "./components/Section";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button";
import fetchImages from "./services/fetchImages";

// const moreImagesPerPage = >IMAGES_PER_PAGE;
const moreImagesPerPage = false;
const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    status: Status.IDLE,
    error: null,
  };

  static propTypes = {};

  onSearchFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: Status.PENDING });

      fetchImages(this.state.searchQuery)
        .then((images) =>
          this.setState({ images: images.hits, status: Status.RESOLVED })
        )
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { images, status, error } = this.state;

    return (
      <>
        <Searchbar>
          <SearchForm getFormData={this.onSearchFormSubmit} />
        </Searchbar>
        <Section theme={theme}>
          <Container>
            {status === "pending" && (
              <Loader
                type="Rings"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={0}
              />
            )}
            {status === "rejected" && <h1>{error.message}</h1>}
            {status === "resolved" && (
              <>
                <ImageGallery images={images} />
                {moreImagesPerPage && <Button label="Load more" />}
              </>
            )}
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
