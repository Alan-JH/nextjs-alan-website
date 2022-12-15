import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader} from '../../components/gallery-elements'
import {images} from './filmgallery'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Film Photos</title>
      </Head>
      {galleriesHeader()}

      Here are most of my film shots, in order. 

      {gallery(images)}

      Last updated 13 December 2022

    </Layout>

  )
}

