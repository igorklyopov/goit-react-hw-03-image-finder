import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primaryBg: "teal",
    secondaryBg: "#cccccc",
    primaryText: "#000000",
    secondaryText: "#cccccc",
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

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background-color: grey;
}

.list {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.link {
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  color: inherit;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.img-wrap {
  position: relative;
  overflow: hidden;
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

.button {
  cursor: pointer;
  outline: none;
  border: none;
}

#root {
}

`;
