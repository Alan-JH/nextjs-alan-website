import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader} from '../../components/gallery-elements'
import {images} from './macrogallery'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Macro" headertextcolor = "white">
      <Head>
        <title>Alan's Macro Shots</title>
      </Head>
      {galleriesHeader()}
      
      <p>
        I 3D printed a couple M42 extensions to be able to use my 50mm Super Tak for film scanning, but they also work pretty well for macro.
        25mm of extension is a modest 1:1.6 magnification, 50mm is 1.1:1, 75mm is 1.6:1, and 100mm is 2.1:1, but degrades the image quality very noticeably.
        Note that as you add extensions, you increase the effective aperture and amplify issues with the lens, like abberations.
      </p>

      {gallery(images)}

      Last updated 8 December 2022

    </Layout>

  )
}

