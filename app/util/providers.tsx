// app/providers.tsx
'use client'

import { theme } from '@/app/util/theme'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { Fonts } from './fonts'


export function Providers({ children }: { children: React.ReactNode }) {
  return(
    <ChakraProvider theme={theme}>
      <Fonts/>
        {children}
    </ChakraProvider>

  )
}