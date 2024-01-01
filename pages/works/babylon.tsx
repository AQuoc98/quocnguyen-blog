import Model3D from '@/components/model-3d'
import { Badge, Box, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/work'

const Work = () => (
  <Layout title="Future">
    <Container>
      <Title>
        Babylon Playground <Badge>2024-2025</Badge>
      </Title>
      <P>Show simple demo for 3D model</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>babylon.js</span>
        </ListItem>
      </List>
      <Box h={300}>
        <Model3D />
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
