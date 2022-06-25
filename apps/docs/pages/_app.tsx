import 'nextra-theme-docs/style.css'

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page)

  return getLayout(<Component suppressHydrationWarning {...pageProps} />)
}