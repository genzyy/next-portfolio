import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Predli = () => {
  return (
    <Layout title="Predli">
      <Container>
        <Title>
          Predli: Full Stack Engineer<Badge>Dec 2021-Present</Badge>
        </Title>
        <P>
          Predli is a global decentralized firm at the forefront of emerging
          technologies. Built by leading experts and researchers from the tech,
          business and cognitive science fields.
          <br />
          My work here consists of working on different projects for our clients
          and delivering them their product with utmost perfection. I work on
          different technologies from frontend frameworks to cloud development
          and devops practices.
        </P>
      </Container>
    </Layout>
  )
}

export default Predli
