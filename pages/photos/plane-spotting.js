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
        <title>Alan's Plane Shots</title>
      </Head>
      {galleriesHeader()}

      <h1>Plane Spotting</h1>
      I sometimes go to Gravelly Point to do plane spotting by Reagan National, and I have also gone near Dulles. I make it a point to bring my telephoto with me on trips in case of spotting opportunities. It's a whole 'nother type of photography, fast paced and fun!

      {gallery(images)}

      Last updated 8 November 2022

    </Layout>

  )
}

