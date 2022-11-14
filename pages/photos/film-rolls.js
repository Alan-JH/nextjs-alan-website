import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const images = [
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Alan's Film Photos</title>
      </Head>
      {galleriesHeader()}

      <h1>Film Rolls</h1>
      I have yet to finish and develop my first roll, but I will post it here when that is done!

      {gallery(images)}

      Last updated 8 November 2022

    </Layout>

  )
}

