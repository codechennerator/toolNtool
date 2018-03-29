import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MessageWell from "../../components/MessageWell"

const mainDivStyle={
  marginTop:"90px",
}

const Messages = (props) => {
  return (
    <Container style = {mainDivStyle} fluid>
      {/* <Item />
      <NewMessage /> */}
      <MessageWell cid = {props.match.params.cid}/>
    </Container>
  );
}

export default Messages;
