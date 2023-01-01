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

      These are 35mm half frame film shots taken on my Olympus Pen EE3. I try to pair similar shots together since they get scanned in as full frame.
      Unfortunately on my first roll, the camera store didn't pair the first frame with anything, so I had to scan them in myself to get them paired properly.

      {gallery(images)}

      Last updated 17 December 2022

    </Layout>

  )
}

