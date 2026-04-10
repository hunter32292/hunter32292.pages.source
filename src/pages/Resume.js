import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

const ResumePage = () => (
    <Container text style={{ marginTop: '2em' }}>
        <Header as='h2'>Resume</Header>
        <p>
            For my full work history and experience, check out my LinkedIn profile.
        </p>
        <a href="https://www.linkedin.com/pub/john-stupka/61/341/83a" target="_blank" rel="noopener noreferrer">
            <Icon name='linkedin' /> View on LinkedIn
        </a>
    </Container>
)

export default ResumePage
