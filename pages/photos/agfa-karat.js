import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/agfa/list'

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
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's 1930s Film Photos</title>
      </Head>
      <br></br>

      These are the shots I got on my Agfa Karat, a 1930's 35mm film camera that I got from my grandfather. All unedited, a few are actually usable.
      The camera doesn't have a built in light meter, so using it is extremely inconvenient, and I'll probably just keep it as a display piece from now on.

      <img
      src = "/photography/agfa.jpg"
      layout='fill'
      objectFit='contain'
      loading="lazy"
      />

      {gallery(images)}

      Last updated 31 December 2022

    </Layout>

  )
}

