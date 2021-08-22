import styled from "styled-components";
import { theme } from "../../StyledCommon";

const StyledSection = styled.section`
  width: 95%;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  text-align: center;
  border-radius: 5px;
  color: ${() => theme.colors.primaryText};
  background-color: ${() => theme.colors.primaryBg};

  @media screen and ${() => theme.media.tablet} {
    width: 600px;
  }
`;

export default StyledSection;
