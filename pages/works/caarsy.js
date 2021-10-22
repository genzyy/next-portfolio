import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Caarsy = () => {
    return (
        <Layout title="Caarsy">
            <Container>
                <Title>Caarsy: Software Developer Intern <Badge>Aug 2021-Oct 2021</Badge></Title>
                <P>
                    Caarsy is India{"'"}s first inventory management software selling company for second hand dealerships.
                    <br />
                    My Work here consisted of creating Rest APIs for CRUD operations on dealerships vehicle with image and legal documents uploading and managing user sessions.
                    And ReactJS frontend to make it User friendly from scratch.
                    One of the best features of this dashboard is that the dealerships can create their own website from our app itself to showcase their inventory to users.
                    <br />
                    The app shows every analytical detail possible for a dealership so that the people can focus on their business and grow it exponentially.
                    <br />
                    The app is available as a webapp, desktop app supporting major operating systems and app for mobile devices.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, ExpressJS, MongoDB, Redis, ReactJS, React-Native, Electron, Redux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Numbers</Meta>
                        <span>Use by 10+ vehicle dealerships for buying/selling vehicles!</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Caarsy