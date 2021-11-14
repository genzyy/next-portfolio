import { Container, Badge, List, ListItem, Button } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const DenoSearch = () => {
  return (
    <Layout title="Deno Search">
      <Container>
        <Title>
          Deno Search <Badge>2021-</Badge>
        </Title>
        <P>
          Deno Search is a commandline tool for searching and modifying contents
          of files in a directory. The tools is based on typescript with nodeJS
          and is an executable binary.
        </P>
        <List ml={4} my={4}>
          <ListItem style={{ margin: '7px 0px' }}>
            <Meta>Platform</Meta>
            <span>Typescript, Deno</span>
          </ListItem>
          <ListItem style={{ margin: '7px 0px' }}>
            <Meta>Stack</Meta>
            <span>Linux/UNIX base systems</span>
          </ListItem>
        </List>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '10px 0px'
          }}
        >
          <Button colorScheme="teal" size="sm" leftIcon={<IoLogoGithub />}>
            <a href="https://github.com/genzyy/deno-search" target="blank">
              Visit Repository
            </a>
          </Button>
        </div>
        <WorkImage src="/images/works/denoSearch.PNG" alt="" />
        <WorkImage src="/images/works/denoSearch1.PNG" alt="" />
      </Container>
    </Layout>
  )
}

export default DenoSearch
