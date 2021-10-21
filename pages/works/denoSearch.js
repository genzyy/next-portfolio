import { Container, Badge,  List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DenoSearch = () => {
 return (
  <Layout title="Deno Search">
   <Container>
    <Title>Deno Search <Badge>2021-</Badge></Title>
    <P>
     Deno Search is a commandline tool for searching and modifying contents of files in a directory. The tools is based on typescript with nodeJS and is an executable binary.
    </P>
    <List ml={4} my={4}>
     <ListItem>
      <Meta>Platform</Meta>
      <span>Typescript, Deno</span>
     </ListItem>
     <ListItem>
      <Meta>Stack</Meta>
      <span>Linux/UNIX base systems</span>
     </ListItem>
    </List>
    <WorkImage src="/images/works/animecli.PNG" alt="" />
    <WorkImage src="/images/works/animecli1.PNG" alt="" />
   </Container>
  </Layout>
 )
}

export default DenoSearch;