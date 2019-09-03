import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Icon,
  Container,
  Menu,
  Dropdown,
  Responsive,
  Segment
} from 'semantic-ui-react'

class Head extends Component {
  render() {
    return ( 
      <div>
        <Responsive as={Segment} minWidth={767} maxWidth={2569}>
          <Menu fixed='top' inverted>
            <Container>
              <Link to="/">
                <Menu.Item header>
                  <Icon className="green" name="circle notched" />
                  [H]unt3r
                </Menu.Item>
              </Link>
              <Link to="/about"><Menu.Item>About</Menu.Item></Link>
              <Link to="/resume"><Menu.Item>Resume</Menu.Item></Link>
              <Link to="/contact"><Menu.Item>Contact</Menu.Item></Link>
              <Link to="/site"><Menu.Item>Site</Menu.Item></Link>
            </Container>
          </Menu>
        </Responsive>
        <Responsive as={Segment} maxWidth={767}>
          <Dropdown text='Menu' icon='circle notched' floating labeled button className='icon green'>
              <Dropdown.Menu>
                <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/about">About</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/resume">Resume</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/contact">Contact</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/site">Site</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          {/* <Menu fixed='top' inverted>
            <Container>
            <Dropdown item className="green" name="circle notched">
              <Dropdown.Menu>
                <Link to="/"><Dropdown.Item as='a'>Home</Dropdown.Item></Link>
                <Link to="/about"><Dropdown.Item as='a'>About</Dropdown.Item></Link>
                <Link to="/resume"><Dropdown.Item as='a'>Resume</Dropdown.Item></Link>
                <Link to="/contact"><Dropdown.Item as='a'>Contact</Dropdown.Item></Link>
                <Link to="/site"><Dropdown.Item as='a'>Site</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>
            </Container>
          </Menu>  */}
        </Responsive>
        {/* https://react.semantic-ui.com/addons/responsive/#types-content */}
      </div>
    );
  }
}
export default Head