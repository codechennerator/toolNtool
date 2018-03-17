import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import logo from "../../components/img/logo.png"
import SearchForm from "../../components/Search"
import { Card, Icon, Image } from 'semantic-ui-react'

const startPage = () => (

    <Card>
      <Image size="Medium" src={logo} />
      <Card.Content>
        <Card.Header>
          Matthew
      </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
        </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
      </a>
      </Card.Content>
    </Card>


);

export default startPage;
