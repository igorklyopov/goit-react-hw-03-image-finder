import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryBg: "#ffffff",
    secondaryBg: "#cccccc",
    primaryDarkText: "#000000",
    secondaryText: "#cccccc",
    primaryLightText: "#ffffff",
  },
  fontWeight: {
    medium: "500",
    bold: "700",
  },
  media: {
    phone: "(max-width: 320px)",
    tablet: "(max-width: 768px)",
    desktop: "(max-width: 1024px)",
  },
};

export const StyledCommon = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  line-height: 1.333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}
`;

/* .img-wrap {
  position: relative;
  overflow: hidden;
} */

// .visuallyHidden {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   margin: -1px;
//   padding: 0;
//   overflow: hidden;
//   border: 0;
//   clip: rect(0 0 0 0);
// }

export const StyledBasicList = styled.ul`
  margin-top: 0;
  padding-left: 0;
  list-style: none;
`;

export const StyledBasicButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  line-height: inherit;
`;

export const StyledBasicLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  color: inherit;
`;
