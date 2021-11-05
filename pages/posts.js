import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import fishWorkflow from '../public/images/terminal.png'
import neovimThumbnail from '../public/images/neovim.png'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          My posts on different blogsites
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title=" My Fish Workflow on Linux"
              thumbnail={fishWorkflow}
              href="https://dev.to/rishitpandey/my-linux-fish-shell-workflow-28lk"
            />
            <GridItem
              title="My Neovim Setup"
              thumbnail={neovimThumbnail}
              href="https://dev.to/rishitpandey/setting-up-neovim-like-vscode-j8h"
            />
          </SimpleGrid>
        </Section>
     </Container>
    </Layout>
  )
}

export default Posts