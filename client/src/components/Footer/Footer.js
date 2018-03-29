import React from "react";
import { Icon, Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import "./Footer.css"

const Footer = props =>  (
    
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>Team Members</List.Item>
              <List.Item as='a'>Customer Service</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='Services' />
            <List link inverted>
              <List.Item as='a'>FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>How It Works</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as='h4' content='Follow Us' />
            <List link inverted>
              <List.Item as='a'><Icon name='twitter' size='big' color="teal" /></List.Item>
              <List.Item as='a'><Icon name='facebook'size='big' color="teal" /></List.Item>
              <List.Item as='a'><Icon name='instagram' size='big' color="teal"/></List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
   
)

export default Footer;