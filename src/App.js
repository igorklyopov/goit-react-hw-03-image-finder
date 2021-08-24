import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import { theme } from "./StyledCommon";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import Section from "./components/Section";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button";

class App extends Component {
  state = {};

  static propTypes = {};

  render() {
    return (
      <>
        <Searchbar />
        <Section theme={theme}>
          <Container>
            <ImageGallery />
            <Button label="Load more" />
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
