import styled from "styled-components";
import { theme, StyledBasicButton } from "../../StyledCommon";

export const StyledIconButton = styled(StyledBasicButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5px 10px 5px 10px;
  color: grey;

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: grey;
  }
`;
