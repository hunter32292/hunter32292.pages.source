import React, { Component } from 'react';
import { Container, Grid, List } from 'semantic-ui-react'
import './Footer.css';


class Footer extends Component {
  
  render() {
    return (
      <div className="Footer">
        <Container>
        <Grid divided='vertically'>
                <Grid.Row columns={2}>
                <Grid.Column>
                    <h4 className="white-text" id="john">Programmer Bio</h4>
                    <p className="grey-text text-lighten-4">I'm a Professional Coffee Drinker, Pun Maker and HyperText Transfer
                        Operator. If it's speed and design you're looking for, you've found the right candidate. I prefer
                        long walks on the beach and want a big fluffy husky. I’ll take a whisky after work
                        until then though.</p>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="white-text">Favorite Links</h4>
                    <List>
                        <List.Item><a className="white-text" href="http://www.coven.link">Coven</a></List.Item>
                        <List.Item><a className="white-text" href="http://www.unsplash.com">Unsplash</a></List.Item>
                        <List.Item><a className="white-text" href="http://www.codepen.io">Codepen</a></List.Item>
                        <List.Item><a className="white-text" href="http://materializecss.com">Materialize</a></List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="white-text">Connect</h4>
                    <List>
                        <List.Item><a className="white-text" href="https://github.com/hunter32292">GitHub</a></List.Item>
                        <List.Item><a className="white-text" href="https://www.linkedin.com/pub/john-stupka/61/341/83a">LinkedIn</a></List.Item>
                        <List.Item><a className="white-text" href="https://twitter.com/Hunt3rDev">Twitter</a></List.Item>
                    </List>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                <Grid.Column columns={3} >
                    &copy; John Stupka - 2019
                    <br />
                    <a href="mailto:jrstupkadev@gmail.com">Message Me</a>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
    );
  }
}

export default Footer;