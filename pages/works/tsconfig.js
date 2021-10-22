import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const TSConfig = () => (
    <Layout title="TSConfig">
        <Container>
            <Title>TSConfig <Badge>2019-2020</Badge></Title>
            <P>
                This is the perfect tsconfig that you need when you are working on any typescript project. It even supports react development in typescript.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>All Operating Systems</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>JSON, Typecript</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/tsconfig.PNG" alt="" />
        </Container>
    </Layout>
)

export default TSConfig;