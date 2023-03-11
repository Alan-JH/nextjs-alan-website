import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader} from '../../components/gallery-elements'
import {images} from '../../public/photography/toma/list'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Toma M900 shots</title>
      </Head>
      {galleriesHeader()}

      These are 35mm shots I have taken with my Toma M900 point and shoot. For my first roll I brought this camera with me skiing, at Whitetail, Vail, and Liberty,
      since it's a cheap camera and I wouldn't care about breaking it. 

      {gallery(images)}

      Last updated 10 March 2023

    </Layout>

  )
}

