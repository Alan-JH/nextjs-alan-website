import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/planes/list'

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
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Plane Spotting!" headertextcolor = "white">
      <Head>
        <title>Alan's Plane Shots</title>
      </Head>
      <br></br>

      I sometimes go to Gravelly Point to do plane spotting by Reagan National, and I have also gone near Dulles. I make it a point to bring my telephoto with me on trips in case of spotting opportunities. It's a whole 'nother type of photography, fast paced and fun!

      {gallery(images)}

      Last updated 2 January 2023

    </Layout>

  )
}

