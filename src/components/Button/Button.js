import { StyledButton, StyledSearchFormButtonLabel } from "./StyledButton";

const Button = ({ label }) => {
  return (
    <StyledButton>
      <StyledSearchFormButtonLabel />
      {label}
      <StyledSearchFormButtonLabel />
    </StyledButton>
  );
};

export default Button;

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});
// <button type="submit" className="SearchForm-button">
//   <span className="SearchForm-button-label">Search</span>
// </button>
