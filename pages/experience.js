import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import scouttTechThumbnail from '../public/images/experience/scouttTech.png'
import caarsyThumbnail from '../public/images/experience/caarsy.png'

const Experience = () => {
    return (
        <Layout title="Experience">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Experience
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="caarsy" title="Caarsy(startup)" thumbnail={caarsyThumbnail}>
                            India's first inventory management software for second hand vehicle dealerships.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="scouttTech" title="Scoutt-Tech" thumbnail={scouttTechThumbnail}>
                            Helping recruiters from early startups to get the best developers across the country!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Experience