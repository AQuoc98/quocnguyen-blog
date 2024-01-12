import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import '@fontsource-variable/source-code-pro'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function Website({ Component, pageProps, router }: AppPropsWithLayout) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website
