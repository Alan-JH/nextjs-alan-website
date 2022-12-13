import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "TJREVERB Interface Board"

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
      <p>
        <a href="https://github.com/TJREVERB/reverb_interface" target="_blank">Github Repo</a>
      </p>
      <p>
        When the 2022-23 TJREVERB team came in over the summer, the interface board on the flatsat was an old version with incorrect routing corrected with jumper wires. 
        After spending about a month working with it and getting familiar with the design, I got to work on designing and fabricating a flight ready version.
      </p>
      <center>
        <img src="/images/reverb/wiring.jpg"/>
        The Iridium ribbon cable pinout was wrong, so the previous team used male to female jumper wires to connect it
      </center>

      <p>
        WIP Last updated 12 Dec 2022
      </p>
    </Layout>

  )
}
