import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const nextJSGuide = () => {
  return (
    <Layout title="NextJS-Guide(WIP)">
      <Container>
        <Title>
          NextJS Guide (WIP)<Badge>2021-</Badge>
        </Title>
        <P>
          This is my NextJS Guide with learning typescript from scratch. I have
          went through a lot of posts, guides about typescript and using
          typescript with NextJS but none of them were good ones and started
          from scratch.
          <br />
          So I have taken this task to create the best NextJS with typescript
          from scratch guide for the developers who want to learn NextJS and
          typescript together.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript, NextJS, NPM</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>
              The guide is in markdown so it can be viewed in any browser
              supported operating system.
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default nextJSGuide
