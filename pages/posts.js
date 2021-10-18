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
              title="My Linux Setup (2021)"
              thumbnail={thumbMyDeskSetup}
              href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="What I learned after working in 2 failed startups"
              thumbnail={thumb500PaidUsers}
              href=""
            />
            <GridItem
              title="I stopped comparing myself from others"
              thumbnail={thumbFinancialGoal}
              href=""
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.5}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="How to setup vim as a daily code editor"
              thumbnail={thumbHowToPriceYourself}
              href=""
            />
            <GridItem
              title="Converting React app to React Native App"
              thumbnail={thumb50xFaster}
              href=""
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
