import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ScouttTech = () => {
    return (
        <Layout title="Scoutt-Tech">
            <Container>
                <Title>Scoutt-Tech: Full-Stack Developer <Badge>Apr 2021-Aug-2021</Badge></Title>
                <P>
                    My work here is to create Rest API and to integrate with the ReactJS frontend both from scratch. The purpose was to serve the content as per the user role and who the logged in user is.
                    <br />
                    The user authentication was impletemented using JWT Authentication and user role was determined in the backend and then few parts of the response were filtered out on the frontend.
                    <br />
                    The goal was achieved and the webapp was used by a lot of early startups for hiring the developers.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, ExpressJS, MongoDB, ReactJS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Numbers</Meta>
                        <span>Used by 15+ startups to hire developers!</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default ScouttTech