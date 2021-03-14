import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
// import { browserHistory } from 'react-router'
import {
  Container,
  Segment,
} from 'semantic-ui-react'
import Footer from '../footer/Footer';
import Head from '../header/Head';
import MainPage from '../pages/Main';
import AboutPage from '../pages/About';
import ResumePage from '../pages/Resume';
import ContactPage from '../pages/Contact';
import SitePage from '../pages/Site';

class App extends Component {
  render() {
    return (
  <div>
    <HashRouter>
      <div>
      <Head />
        <Container text style={{ marginTop: '7em' }}>
          <Route name='main' exact path='/' component={MainPage} />
          <Route name='about' path='/about' component={AboutPage} />
          <Route name='resume' path='/resume' component={ResumePage} />
          <Route name='contact' path='/contact' component={ContactPage} />
          <Route name='site' path='/site' component={SitePage} />
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Footer/>
        </Segment>
      </div>
    </HashRouter>
  </div>
);
}
}
export default App
