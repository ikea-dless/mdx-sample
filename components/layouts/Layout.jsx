import Head from "next/head"

export const Layout = ({ meta, children }) => (
  <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    { children }
  </>
)
