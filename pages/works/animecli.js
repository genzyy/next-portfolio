import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Animecli = () => {
 return (
  <Layout title="anime-CLI">
   <Container>
    <Title>anime-CLI <Badge>2020-</Badge></Title>
    <P>
     anime-CLI is a commandline tool that gives every information about an anime inside your terminal. Want to know about no. of seasons, episodes and is it a movie or a series? You got everything in your terminal.
     You can also save anime titles locally to have a watch later list.
    </P>
    <List ml={4} my={4}>
     <ListItem>
      <Meta>Platform</Meta>
      <span>Windows/macOS/Linux</span>
     </ListItem>
     <ListItem>
      <Meta>Stack</Meta>
      <span>Javascript, NodeJS, Commandline</span>
     </ListItem>
    </List>
    <WorkImage src="/images/works/animecli.PNG" alt="" />
    <WorkImage src="/images/works/animecli1.PNG" alt="" />
   </Container>
  </Layout>
 )
}

export default Animecli