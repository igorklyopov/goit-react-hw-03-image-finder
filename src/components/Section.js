import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
// .section {
//   width: 95%;
//   margin-top: 5%;
//   margin-bottom: 5%;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 20px 0;
//   text-align: center;
//   background-color: grey;
//   border-radius: 5px;
// }

// @media screen and (min-width: 768px) {
//   .container {
//     width: 600px;
//   }
// }

// .sectionTitle {
// }
