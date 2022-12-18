import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

const title = "F/A-18C Up Front Controller"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/projects">
        <a>Back to projects</a>
      </Link>
      <br></br>

    </Layout>

  )
}
