import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/astro/list'

export function collectionList(title, page){
  return (
    <center>
      <h4><a href={page} className="button">{title}</a></h4>
      {galleryNoClick(images.splice(0, 4))}
    </center>
  );
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Astro Photography" headertextcolor = "white">
      <Head>
        <title>Alan's Astro Shots</title>
      </Head>
      <br></br>

      I have attempted astro a few times. My strategy so far has been to sit the camera on the ground, hit the shutter release (at 30 second shutter), and walk away...

      {gallery(images)}

      Last updated 25 November 2022

    </Layout>

  )
}

