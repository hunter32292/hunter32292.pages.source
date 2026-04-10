import React from 'react'
import { Container, Header, Icon, List } from 'semantic-ui-react'

const ContactPage = () => (
    <Container text style={{ marginTop: '2em' }}>
        <Header as='h2'>Get In Touch</Header>
        <p>
            Have a question, project idea, or just want to connect? Reach out through any of the channels below.
        </p>
        <List relaxed>
            <List.Item>
                <Icon name='github' />
                <List.Content>
                    <a href="https://github.com/hunter32292" target="_blank" rel="noopener noreferrer">github.com/hunter32292</a>
                </List.Content>
            </List.Item>
            <List.Item>
                <Icon name='linkedin' />
                <List.Content>
                    <a href="https://www.linkedin.com/pub/john-stupka/61/341/83a" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </List.Content>
            </List.Item>
            <List.Item>
                <Icon name='twitter' />
                <List.Content>
                    <a href="https://twitter.com/Hunt3rDev" target="_blank" rel="noopener noreferrer">@Hunt3rDev</a>
                </List.Content>
            </List.Item>
        </List>
    </Container>
)

export default ContactPage
