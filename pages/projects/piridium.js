import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'
import { notes_list_element_full } from '../../components/landing-elements'

const title = "Piridium Bus"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/projects">
        <a>Back to projects</a>
      </Link>
      <br></br>
      <p>
        <a href="https://github.com/Alan-JH/LabPSU" target="_blank">Github Repo</a>
      </p>
      <p>
        Piridium is a CubeSat bus design employing a similar design philosophy to Pycubed, but using an Iridium 9602N Modem and Raspberry Pi Zero flight computer
        incorporating the lessons from TJREVERB, the 2U CubeSat that I worked on. It is designed to be a low cost and easy to use CubeSat bus with basic payload interfacing. 
        The design is divided into an avionics board and a battery board, with the battery board housing six 18650 cells, and balancing and protection circuitry, and the avionics 
        board housing the inhibits, RBF circuitry, 5V rail regulators for Iridium and RPi, payload power control circuitry, solar input regulators, telemetry readouts, an RTC and IMU, 
        and the RPi and Iridium themselves. Most components are automotive grade at a baseline, to survive temperature and mechanical stresses, and most components are also selected based 
        on radiation testing for tolerance for TID and SEE. 
      </p>

      <center>
        <img src="/images/piridium/stack.jpg" loading="lazy"/>
      </center>

      <p>
        This page is a work in progress, last updated 17 Apr 2023
      </p>

    </Layout>

  )
}
