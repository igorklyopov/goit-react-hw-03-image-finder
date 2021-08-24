import { Children, Component } from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./StyledSearchForm";

class SearchForm extends Component {
  render() {
    return (
      <StyledSearchForm>
        <StyledSearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    );
  }
}

export default SearchForm;
