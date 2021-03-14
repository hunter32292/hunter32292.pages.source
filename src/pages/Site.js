import React from 'react'
import OldSite from '../assets/images/old_website.png'
import { Segment, Header, Image } from 'semantic-ui-react'

const SitePage = () => (
    <div>
        <Segment>
            <Header as='h3'>About This Site:</Header>
            <hr></hr>
            <p>
            This site originally was built as a set of three very static HTML CSS/JS pages with information about myself. Simple, clean, and easy to maintain.
            </p>
            <p>
            The next iteration of this site is using angular.js and bootstrap, this template was generated using yeoman.
            The yeoman built framework is using grunt as the task runner and some default minimization and compression for the files.
            A travis CI pipeline is used to make building and deploying the site easier.
            <Image src={OldSite}  size='small' />
            </p>
            <p>
            The current iteration of the site is a react application, built with the react-app scaffold system and bundle into a minimized distribution with react-scripts.
            </p>
        </Segment>
    </div>
  )

export default SitePage
