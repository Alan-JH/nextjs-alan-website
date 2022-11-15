import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "Scale Models"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/projects/projects-landing">
        <a>Back to projects</a>
      </Link>
      <br></br>

      From seventh grade until sophomore year, I built all sorts of scale models and dioramas, from 1:16 Guillows stick and tissue, to 1:35 armor to 1:72 plastic aircraft.
      <br></br>
      Here are my models:
      <br></br>
      {img_photo_descrip_block("Guillows 1:16 Spitfire", "This was my first model, a balsa stick and tissue with a wind up propeller. Ran from March to April 2018", "/images/models/spitfire.jpg")}
      {img_photo_descrip_block("Guillows 1:16 BF-109", "My second model, another balsa stick and tissue, and this one had the option for longer wings for better flight, that I did not use. Ran from April to June 2018", "/images/models/bf109.jpg")}

    </Layout>

  )
}
