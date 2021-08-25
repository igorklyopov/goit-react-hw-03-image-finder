import { Component } from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./StyledSearchForm";

class SearchForm extends Component {
  state = {
    searchQuery: "",
  };

  static propTypes = {};

  onInputChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchQuery.trim() !== "") {
      this.props.getFormData(this.state.searchQuery);
      this.setState({ searchQuery: "" });
    }
    console.log("Enter search query!");
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.onFormSubmit}>
        <StyledSearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searchQuery}
          onChange={this.onInputChange}
        />
        <button type="submit" aria-label="search">
          search
        </button>
      </StyledSearchForm>
    );
  }
}

export default SearchForm;