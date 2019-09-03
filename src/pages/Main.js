import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'


const MainPage = () => (
    <Grid stackable divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
            <Header as='h1'>Welcome,</Header>
            <p>
            I'm a ... Coffee Drinker, Command-Line Junkie, Foodie, HyperText Transfer Operator, and Overly Energetic Engineer <span role="img">💻</span> <span role="img">☕</span>
            </p>
        </Grid.Column>
        <Grid.Column>
          <Image src={require('../assets/images/profile.jpg')} size='small' circular />
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row columns={3}>
        <Grid.Column>
        <h4>Who am I?</h4>
            <p>
            My name is John, I am a software engineer in the Seattle area. I work as a fullstack software developer. I focus on creating clean, flexible, scalable, and maintainable software solutions for clients. While training my team and working with them to find the best solutions to the problems we're dealing with.
            </p>
        </Grid.Column>
        <Grid.Column>
        <h4>What can you find here?</h4>
            <p>
            This is my personal site. You can find my resume, favorite resources, links to my social accounts, and my blog. Along with general information about me, and some of the resources I've found useful.
            </p>
        </Grid.Column>
        <Grid.Column>
        <h4>What can I do for you?</h4>
            <p>I try to be active in the technology community, I attend tech conferences, hackathons, and speaking events. I have a large list of resources I collect for aspiring web developers and encourage other developers to better themselves. If you want to learn, I want to teach.</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
        {/* <div id="retainable-rss-embed" 
        data-rss="https://medium.com/feed/retainable,
        https://medium.com/feed/@jrstupkadev"
        data-maxcols="3" 
        data-layout="grid" 
        data-poststyle="inline" 
        data-readmore="Read the rest" 
        data-buttonclass="btn btn-primary" 
        data-offset="-100"></div> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

export default MainPage
