import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'
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
