import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "PCB Reflow Hotplate"

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

      At the start of junior year, I saw a <a href="https://www.youtube.com/watch?v=dy9NutXl2OY" target="_blank">video</a>&nbsp;by Carl Bugeja about using an aluminum PCB as a hotplate for solder reflow. I really liked the idea, so I stole it. I decided that I wanted
      a larger plate area to be able to reflow larger PCBs, and I wanted a separate PCB for control rather than putting the control circuitry on the same aluminum PCB. 

      <h2>What is reflow?</h2>
      When you see PCBs in consumer electronics with hundreds of tiny surface mount parts soldered on, know that those were not hand soldered. They were soldered through a process called reflow, where all the solder on the board is heated at once. 
    </Layout>

  )
}
