import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container";
import Section from "./components/Section";

class App extends Component {
  state = {};

  static propTypes = {};

  render() {
    return (
      <Section>
        <Container>
          <h1>Hello everyone</h1>
        </Container>
      </Section>
    );
  }
}

export default App;
