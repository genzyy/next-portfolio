import { Container, Badge, List, ListItem, Button } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const Animecli = () => {
  return (
    <Layout title="anime-CLI">
      <Container>
        <Title>
          anime-CLI <Badge>2020-</Badge>
        </Title>
        <P>
          anime-CLI is a commandline tool that gives every information about an
          anime inside your terminal. Want to know about no. of seasons,
          episodes and is it a movie or a series? You got everything in your
          terminal. You can also save anime titles locally to have a watch later
          list.
        </P>
        <List ml={4} my={4}>
          <ListItem style={{ margin: '7px 0px' }}>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem style={{ margin: '7px 0px' }}>
            <Meta>Stack</Meta>
            <span>Javascript, NodeJS, Commandline</span>
          </ListItem>
        </List>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '10px 0px'
          }}
        >
          <Button colorScheme="teal" leftIcon={<IoLogoGithub />} size="sm">
            <a href="https://github.com/genzyy/anime-cli" target="blank">
              Visit Repository
            </a>
          </Button>
        </div>
        <WorkImage src="/images/works/animecli.PNG" alt="" />
        <WorkImage src="/images/works/animecli1.PNG" alt="" />
      </Container>
    </Layout>
  )
}

export default Animecli
