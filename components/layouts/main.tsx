import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'
import Footer from '../footer'
import NavBar from '../navbar'

const Main = ({
  children,
  router
}: {
  children: ReactNode
  router: NextRouter
}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Quoc's homepage" />
        <meta name="author" content="Quoc Nguyen" />
        <title>Quoc Nguyen - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
