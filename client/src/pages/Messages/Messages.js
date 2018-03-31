import React from 'react';
import { Container } from 'semantic-ui-react'
import Messaging from "../../components/Messaging"

const mainDivStyle={
  marginTop:"90px",
}

const Messages = (props) => {
  return (
    <Container style = {mainDivStyle} fluid>
      {/* <Item />
      <NewMessage /> */}
      <Messaging cid = {props.match.params.cid}/>
    </Container>
  );
}

export default Messages;
