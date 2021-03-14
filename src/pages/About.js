import React from 'react'
import Joynt from '../assets/images/joynt.jpg'
import Racys from '../assets/images/racys.jpg'
import Starwars from '../assets/images/starwars.jpg'
import Hackathon from '../assets/images/hackathon.jpg'
import { Segment, Header, Grid, Image, Divider } from 'semantic-ui-react'


const AboutPage = () => (
    <div>
        <Grid stackable >
            <Grid.Row columns={4}>
                <Grid.Column>
                    <Image src={Joynt} size='medium' rounded />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Racys} size='medium' rounded />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Starwars} size='medium' rounded />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Hackathon} size='medium' rounded />
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Segment>
            <Header as='h4'>Bio</Header>
            <hr></hr>
            <p>
            Originally from Green Bay I'm a Software Developer, and graduate of the University of Wisconsin – Eau Claire. I previously worked with the technology services department at the University of Wisconsin – Eau Claire, designing and maintaining web applications for departments across the university. I used the Ruby on Rails web framework and custom built software for clients across campus. I graduated in December 2015 and moved to the Minneapolis/St. Paul metro to work with a local company in their technology department. I've spent a large amount of time designing reliable systems with redundant backup and failover plans. While creating 12 factor applications built ontop of cloud based technologies in micro service design patterns.
            </p>
            <Divider> </Divider>
            <p>
            I'm interested in finding ways to make myself a better, faster, and more effective programmer. I am active in meetings with local developer/programmer groups in the area, hoping to learn about new technology and new techniques. I also spend time researching new technology and implementing this technology in side projects by myself.
            </p>
            <Divider> </Divider>
            <p>
            Currently I'm very interested in learning algorithms, distributed systems, meta coding, and cloud technology. I would like to continue my education and work towards a better understanding of electrical engineering and advanced mathematics. 
            </p>
        </Segment>
    </div>
  )

export default AboutPage
