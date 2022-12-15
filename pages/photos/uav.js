import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader} from '../../components/gallery-elements'
import {images} from './uavgallery'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "UAV Club Photos" headertextcolor = "white">
      <Head>
        <title>Alan's UAV Club Photos</title>
      </Head>
      {galleriesHeader()}

      I take photos at UAV test flights, and some of them are good

      {gallery(images)}

      Last updated 24 November 2022

    </Layout>

  )
}

