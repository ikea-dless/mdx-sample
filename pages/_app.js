import { MDXProvider } from "@mdx-js/react"
import { CodeBlock } from "../components/layouts/CodeBlock"

const mdComponents = {
  code: CodeBlock
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdComponents}>
      <Component { ...pageProps } />
    </MDXProvider>
  )
}

export default MyApp
