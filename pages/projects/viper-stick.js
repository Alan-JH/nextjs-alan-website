import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

const title = "Viper Sidestick"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/projects/projects-landing">
        <a>Back to projects</a>
      </Link>
      <br></br>
      <a href="https://www.thingiverse.com/make:875888" target="_blank">Thingiverse make</a>
      <p>
        
      </p>
      <p>
        Last updated 16 Dec 2022
      </p>
    </Layout>

  )
}
