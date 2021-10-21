import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import npmPackage from '../public/images/npm.jpg'
import dwmThumbnail from '../public/images/dwm.jpg'
import denoSearch from '../public/images/deno.jpg'
import rxfetchThumbnail from '../public/images/rxfetch.png'
import dogehouseThumbnail from '../public/images/dogehouse.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="animecli" title="Anime-CLI" thumbnail={npmPackage}>
            A terminal tool to search for any anime and get all the information
            about it in the terminal itself.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="denoSearch"
            title="Deno-Search"
            thumbnail={denoSearch}
          >
            A search cli tool to search files in a directory and moify them.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="sucklessBuilds"
            title="My suckless builds"
            thumbnail={dwmThumbnail}
          >
            My suckless dwm, dwmblocks and dmenu builds.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="specialicious" thumbnail={thumbMenkiki} title="Specialicious">
           A website to search for favourite recipes and save them for later!
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Contributions
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="rxfetch"
            thumbnail={rxfetchThumbnail}
            title=" Mangeshrex/rxfetch"
          >
            Custom system fetching tool which is made in bash script.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="dogehouse"
            thumbnail={dogehouseThumbnail}
            title="dogehouse"
          >
            Taking voice conversations to the moon.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
