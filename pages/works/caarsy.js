import { Container, Badge, List, ListItem, Button } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { MdOutlineWeb } from 'react-icons/md'

const Caarsy = () => {
  return (
    <Layout title="Caarsy">
      <Container>
        <Title>
          Caarsy: Software Developer Intern<Badge>Aug 2021-Oct 2021</Badge>
        </Title>
        <P>
          Caarsy is India{"'"}s first inventory management software selling
          company for second hand dealerships.
          <br />
          My Work here consisted of creating Rest APIs for CRUD operations on
          dealerships vehicle with image and legal documents uploading and
          managing user sessions. And ReactJS frontend to make it User friendly
          from scratch. One of the best features of this dashboard is that the
          dealerships can create their own website from our app itself to
          showcase their inventory to users.
          <br />
          The app shows every analytical detail possible for a dealership so
          that the people can focus on their business and grow it exponentially.
          <br />
          The app is available as a webapp, desktop app supporting major
          operating systems and app for mobile devices.
          <br /> <br /> <u>Note:</u> The company stopped its operations because
          we didn&apos;t get any funds or investors to run our company. We
          worked hard on our project and was the best among our competitors but
          our business model was not good so we need to work on that.
        </P>
        <List ml={4} my={4}>
          <ListItem style={{ margin: '7px 0px' }}>
            <Meta>Stack</Meta>
            <span>
              Javascript, ExpressJS, MongoDB, Redis, ReactJS, React-Native,
              Electron, Redux
            </span>
          </ListItem>
          <ListItem style={{ margin: '7px 0px' }}>
            <Meta>Numbers</Meta>
            <span>
              Use by 10+ vehicle dealerships for buying/selling vehicles!
            </span>
          </ListItem>
        </List>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button colorScheme="teal" leftIcon={<MdOutlineWeb />} size="sm">
            <a href="https://app.caarsy.com/home" target="blank">
              Visit App
            </a>
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

export default Caarsy
