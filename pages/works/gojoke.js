import { Container, Badge, List, ListItem, Button } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const Gojoke = () => {
  return (
    <Layout title="Gojoke">
      <Container>
        <Title>
          Gojoke <Badge>2020-</Badge>
        </Title>
        <P>
          A commandline tool usually executed when you open a terminal or
          whenever the shell config is called. This executable just displays a
          joke on terminal. The tool is created using golang and is available as
          a binary executable. The binary makes a request to an external api.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>GoLang, API</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS, Linux, and other UNIX based systems</span>
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
            <a href="https://github.com/genzyy/gojoke" target="_blank">
              Visit Repository
            </a>
          </Button>
        </div>
        <WorkImage src="/images/works/golang.png" alt="gojoke" />
      </Container>
    </Layout>
  )
}

export default Gojoke
