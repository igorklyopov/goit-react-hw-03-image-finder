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

export default Button;

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});
