import styled from "styled-components";
import { theme } from "../../StyledCommon";

const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 95%;
  @media screen and ${() => theme.media.tablet} {
    width: 500px;
  }
`;

export default StyledContainer;
