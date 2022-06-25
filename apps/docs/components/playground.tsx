import { Sandpack } from "@codesandbox/sandpack-react";

type PlayProps = {
    content: string
    imports: string[]
}

export default function Play ({ content, imports }: PlayProps) {
    return <>
        <br />
        <Sandpack
     template='react-ts'
     files={{
    "/App.tsx": `import { ${imports.join(', ')} } from 'jhq-ui' 
import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'

export default function App(): JSX.Element {
  return (
    <ChakraProvider>
      <UserProvider>
        ${content.toString()}
      </UserProvider>
    </ChakraProvider>
  )
}`
  }}
    customSetup={{
      dependencies: {
        'react-icons': '3.11.0',
        '@chakra-ui/react': 'latest',
        '@chakra-ui/icons': 'latest',
        '@emotion/react': '^11.7.0',
        '@emotion/styled': '^11.6.0',
        'framer-motion': '^4.1.17',
        react: '^18.0.0',
        'react-dom': '^18.0.0',
        'react-scripts': '^4.0.0',
        'jhq-ui': '^0.1.0',
        'next': '^10',
        '@auth0/nextjs-auth0': '^1'
      },
      devDependencies: {
        '@types/react': '^18.0.0',
        '@types/react-dom': '^18.0.0',
        typescript: '^4.0.0'
      },
    }}
/>
    </>
}