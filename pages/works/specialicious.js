import { Container, Badge, List, ListItem } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Specialicious = () => {
 return (
  <Layout title="Specialicious">
    <Container>
      <Title>Specialicious <Badge>2019-2021</Badge></Title>
      <P>
        Specialicious is a react based website having more than ten thousand of recipes of all kinds. Search among the big list and serve your loved ones a king sized meal!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>All</span>
          </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, React, Redux, API</span>
        </ListItem>
      </List>
          <WorkImage src="/images/works/specialicious.PNG" alt="" />
    </Container>
  </Layout>
 )
}

export default Specialicious