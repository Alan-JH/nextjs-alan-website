import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Title"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/notesheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <br></br>
      <Link href="/notes">
        <a>Back to notes</a>
      </Link>
      <br></br>

    </Layout>

  )
}
