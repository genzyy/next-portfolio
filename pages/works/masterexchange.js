import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const MasterExchange = () => {
  return (
    <Layout title="MasterExchange">
      <Container>
        <Title>
          MasterExchange: SDE<Badge>Dec 2021-Present</Badge>
        </Title>
        <P>
          MasterExchange is the first web3-based investing platform for music
          record labels. Working as a Software Development Engineer, I worked as
          a Frontend Engineer, Backend Engineer, practicing DevOps and learning
          Blockchain technologies. Working on this project, fueled me to learn
          more about devops and system engineering and led me to start learning
          system technologies.
        </P>
      </Container>
    </Layout>
  )
}

export default MasterExchange
