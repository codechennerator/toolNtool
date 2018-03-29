import React from "react";
import SearchForm from "../../components/Search";
import { Container } from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Container
    fluid
    style={{
      textAlign: "center",
      zIndex: "1"
    }}
  >
    <SearchForm />
  </Container>
);
const startPage = () => (
  <div>
    <HomepageHeading />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);

export default startPage;
