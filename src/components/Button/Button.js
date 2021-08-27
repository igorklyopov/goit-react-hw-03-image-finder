import { StyledButton, StyledSearchFormButtonLabel } from "./StyledButton";

const Button = ({ label, onLoadMoreBtnClick }) => {
  return (
    <StyledButton onClick={onLoadMoreBtnClick}>
      <StyledSearchFormButtonLabel />
      {label}
      <StyledSearchFormButtonLabel />
    </StyledButton>
  );
};
// onClick={this.props.onLoadMoreBtnClick}
export default Button;

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});
// <button type="submit" className="SearchForm-button">
//   <span className="SearchForm-button-label">Search</span>
// </button>
