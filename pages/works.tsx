import { WorkGridItem } from '@/components/grid-item'
import Section from '@/components/section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import thumbFlutter from '../public/images/works/fluter.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="future"
            title="Future App"
            thumbnail={thumbFlutter}
          >
            I&apos;m working on this
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="future"
            title="Future App"
            thumbnail={thumbFlutter}
          >
            I&apos;m working on this
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
