import styled from "styled-components";

const Container = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
// .container {
//   max-width: 100%;
//   margin: 0 auto;
//   width: 95%;
// }

// @media screen and (min-width: 768px) {
//   .container {
//     width: 500px;
//   }
// }
