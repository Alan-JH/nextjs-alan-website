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
        <title>Alan's UAV Club Photos</title>
      </Head>
      {galleriesHeader()}

      <h1>UAV Club</h1>
      I take photos at UAV test flights, and some of them are good

      {gallery(images)}

      Last updated 8 November 2022

    </Layout>

  )
}

