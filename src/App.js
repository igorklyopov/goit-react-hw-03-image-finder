import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import { theme } from "./StyledCommon";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import SearchForm from "./components/SearchForm";
import Section from "./components/Section";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button";
import fetchImages from "./services/fetchImages";

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

  componentDidUpdate(prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      // this.setState({ status: Status.PENDING });

      fetchImages(this.state.searchQuery).then((images) =>
        this.setState({ images: images.hits, status: Status.RESOLVED })
      );
    } else {
      return;
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
            {status === "pending" && <h1>pending</h1>}
            {status === "rejected" && <h1>{error.message}</h1>}
            {status === "resolved" && <ImageGallery images={images} />}
            <Button label="Load more" />
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
