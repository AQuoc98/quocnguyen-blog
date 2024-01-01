import { DownloadIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const handleDownload = () => {
    fetch('/cv.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)

        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'cv.pdf'
        alink.click()
      })
    })
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a front-end developer!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2">Quoc Nguyen</Heading>
            <p>Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/ken.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="130"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I&apos;m a freelance and a front-end web developer based in Viet
            Nam. I&apos;m focused on turning ideas into practical software,
            doing my best work when collaborating closely with founders,
            designers, and developers.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Button
              rightIcon={<DownloadIcon />}
              colorScheme="teal"
              onClick={handleDownload}
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Nha Trang, Viet Nam.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at Vietsoft company.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated with a Bachelor&apos; degree in Software Engineering from
            Van Lang University.
          </BioSection>
          <BioSection>
            <BioYear>2021 to 2022</BioYear>
            Worked at Ninecode company.
          </BioSection>
          <BioSection>
            <BioYear>2022 to current</BioYear>
            Work at Simpson Strong-Tie Viet Nam company.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Music, travel, football, badminton </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/AQuoc98" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  AQuoc98
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/anhquoc.nguyen.3398"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  Nguyen Dinh Anh Quoc
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/quoc-nguyen-k3398"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Quoc Nguyen
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
