import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import styles from '../../components/layout.module.css'
import {gallery, galleryNoClick} from '../../components/gallery-elements'
import {images} from '../../public/photography/filmrolls/list'

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
        <title>Alan's Film Photos</title>
      </Head>
      <br></br>
      Here are most of my film shots, in order. I have shot with Kodak Ektar 100, Kodak Portra 400, and expired Kodak Gold 200 and Fujicolor Xtra 400.
      These are mostly shots I have taken on my SLRs, but you can also check out my point and shoot shots <Link href="/photos/half-frame"><a>here</a></Link>
      &nbsp;or <Link href="/photos/toma"><a>here</a></Link>, or my agfa 1930's camera shots <Link href="/photos/agfa-karat"><a>here</a></Link>.
      
      <h3>Notes</h3>
      <li>Expired film should be overexposed by one or two stops</li>
      <li>At least at the store I get my film scanned at, shadows tend to be a bit green, which can contribute to the film look, or can be edited out</li>
      <li>When adjusting curves for film editing, often shots that are too grainy due to underexposure can benefit from a slight dip in the curve very low in the histogram</li>

      {gallery(images)}

      Last updated 10 March 2023

    </Layout>

  )
}

