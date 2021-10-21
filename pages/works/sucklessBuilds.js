import { Container, Badge,  List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const SucklessBuilds = () => {
 return (
  <Layout title="Suckless Builds">
   <Container>
    <Title>Suckless Builds <Badge>2020-2021</Badge></Title>
    <P>
     Suckless Builds are my builds of suckless tools like dwm, dmenu, dwmblocks and slstatus. These are linux applications and can only be run on linux. Its a window manager written in C for which there are no config files. You have to edit the source file to change the configuration.
    </P>
    <List ml={4} my={4}>
     <ListItem>
      <Meta>Platform</Meta>
      <span>Linux</span>
     </ListItem>
     <ListItem>
      <Meta>Stack</Meta>
      <span>C, C++</span>
     </ListItem>
    </List>
    <WorkImage src="/images/works/animecli.PNG" alt="" />
    <WorkImage src="/images/works/animecli1.PNG" alt="" />
   </Container>
  </Layout>
 )
}

export default SucklessBuilds