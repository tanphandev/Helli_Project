import React from 'react'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import theme from '@/configs/antdConfig'

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
)

export default App
