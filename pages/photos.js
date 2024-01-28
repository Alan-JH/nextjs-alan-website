import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import "react-image-lightbox/style.css";
import {gallery, galleryNoClick} from '../components/gallery-elements'
import {images} from '../public/photography/samples/list'

export default function FirstPost() {

  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Photography</title>
      </Head>

      <br></br>
      <p>
        I shoot 35mm and 120 film, and some digital. I do landscapes, street, and try my hand at astro and portraits whenever the opportunity presents itself.
        I've also shot local shows in West Lafayette as a side gig. 
      </p>
      <p>
        I've shot on a bunch of cameras, including a Sony a6000, Pentax ME Super, Olympus Pen EE3, Nikon F3HP, Mamiya RB67 Pro S, Olympus EM-5II
        and some other random ones that I've been given/found. Right now my main cameras are my F3HP for 35mm, EM-5II for digital, and RB67 for medium format.
        I like to shoot color negative (Portra, Ektar, and Cine 800T), but I've also fiddled with black and white and slides.
      </p>
      <p>
        I also post on instagram as @alanhsu.photos!
      </p>
      <h2>
        50 Samples
      </h2>
      {gallery(images)}

      

    </Layout>

  )
}

