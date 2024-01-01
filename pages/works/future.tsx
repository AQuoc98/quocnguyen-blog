import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Future">
    <Container>
      <Title>
        Future <Badge>2024-2025</Badge>
      </Title>
      <P>Description for app</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          To be defined
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>To be defined</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fluter.jpg" alt="Future App" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
