import { Container, Badge, List, ListItem, Button } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const SucklessBuilds = () => {
  return (
    <Layout title="Suckless Builds">
      <Container>
        <Title>
          Suckless Builds <Badge>2020-2021</Badge>
        </Title>
        <P>
          Suckless Builds are my builds of suckless tools like dwm, dmenu,
          dwmblocks and slstatus. These are linux applications and can only be
          run on linux. Its a window manager written in C for which there are no
          config files. You have to edit the source file to change the
          configuration.
        </P>
        <List ml={4} my={4}>
          <ListItem style={{ margin: '10px 0px' }}>
            <Meta>Platform</Meta>
            <span>Linux</span>
          </ListItem>
          <ListItem style={{ margin: '10px 0px' }}>
            <Meta>Stack</Meta>
            <span>C, C++</span>
          </ListItem>
        </List>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button colorScheme="teal" leftIcon={<IoLogoGithub />} size="xs">
            <a
              href="https://github.com/genzyy/suckless-builds/tree/dotfiles"
              target="blank"
            >
              Visit Repository
            </a>
          </Button>
        </div>
        <WorkImage src="/images/works/dwm.png" alt="" />
      </Container>
    </Layout>
  )
}

export default SucklessBuilds
