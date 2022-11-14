import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const title = "Website"
const top_page_title = "How I Made This Website"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{top_page_title}</h1>
      
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <br></br>
      <br></br>

      This website started as a carbon copy of Shihao Cao's website over the Summer of 2022. I am not a web developer, so a lot of my changes have been messing around and seeing what happens.
      For more details, check <a href="https://www.shihaocao.com/notes/how-i-made-this-website" target="_blank" rel="noopener noreferrer">his website</a> out. 
      
      <br></br>
      <br></br>
      One of the more substantial changes I made was a google photos style gallery for my photography pages, because I wanted a nicer way to show off more of my photos.
      I did this with <a href="https://github.com/frontend-collective/react-image-lightbox" target="_blank" rel="noopener noreferrer">react-image-lightbox</a>, an npm package that provides tools for displaying images.

      <p>You can find the source code for my current website on this&nbsp;
        <Link href="https://github.com/Alan-JH/nextjs-alan-website">github repo.</Link></p>

    </Layout>

  )
}
