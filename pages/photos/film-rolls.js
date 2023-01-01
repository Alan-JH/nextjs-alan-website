import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader} from '../../components/gallery-elements'
import {images} from '../../public/photography/filmrolls/list'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Film Photos</title>
      </Head>
      {galleriesHeader()}

      Here are most of my film shots, in order. I have shot with Kodak Ektar 100, Kodak Portra 400, and expired Kodak Gold 200 and Fujicolor Xtra 400.
      
      <h3>Notes</h3>
      <li>Ektar 100 is really nice and contrasty (I am an Ektar simp)</li>
      <li>Portra 400 likes to be overexposed by one stop on my Pentax ME Super (which already errs on the side of overexposure beacuse of a lightly worn meter)</li>
      <li>Expired film should be overexposed by one or two stops</li>
      <li>At least at the store I get my film scanned at, shadows tend to be a bit green, which can contribute to the film look, or can be edited out</li>
      <li>When adjusting curves for film editing, often shots that are too grainy due to underexposure can benefit from a slight dip in the curve very low in the histogram</li>

      {gallery(images)}

      Last updated 31 December 2022

    </Layout>

  )
}

