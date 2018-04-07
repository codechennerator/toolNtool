import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Container, Icon } from 'semantic-ui-react';
const mainDivStyle={
  marginTop: "100px",
  marginBottom: "100px"
}

const SignIn = () => (
  <Container style = {mainDivStyle}>
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' textAlign='center' style={{color: "#5c7aff", fontFamily: "'Alfa Slab One', cursive"}}>
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='grey' fluid size='large' basic style={{fontFamily: "'Open Sans', sans-serif"}} >Login</Button>
            <p style={{padding: "10px", fontFamily: "'Open Sans', sans-serif"}}> OR </p>
            <Button href="/auth/google" color="grey" fluid size='large' style={{
              marginTop: "-15px", fontFamily: "'Open Sans', sans-serif"
            }}><Icon name='google' />Login with Google</Button>
          </Segment>
        </Form>
        <Message style={{fontFamily: "'Open Sans', sans-serif"}}>
          New to us? <a>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
  </Container>
)

export default SignIn