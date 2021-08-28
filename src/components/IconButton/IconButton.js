import { StyledIconButton } from "./StyledIconButton";

const IconButton = ({ children, type, ariaLabel, onClick }) => {
  return (
    <StyledIconButton type={type} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
