import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader} from '../../components/gallery-elements'
import {images} from '../../public/photography/half-frame/list'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Half Frame Photos</title>
      </Head>
      {galleriesHeader()}

      These are 35mm half frame film shots taken on my Olympus Pen EE3. The Pen is the point and shoot I use the most, and I carry it with me most of the time
      whenever I have my backpack. I initially tried to pair shots with similar subjects, but I have since given that up.
      Unfortunately on my first roll, the camera store didn't pair the first frame with anything, so I had to scan them in myself to get them paired properly.

      {gallery(images)}

      Last updated 10 March 2023

    </Layout>

  )
}

