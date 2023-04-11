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

      <h2>Background</h2>
      <p>
        I started this project in October '22, but its roots go back to a year before. While I was working on TJREVERB, we ran into an issue that led us to believe the EPS 
        may have been broken, so I started a stopgap eps design to continue testing the flatsat with. Since the EPS didn't end up being broken, I stopped working on the stopgap eps 
        shortly after. I restarted the project over winter break, mostly out of boredom, this time going for a full EPS design. I had finished it by April-May with the help of 
        Kiran Donelly, a sophomore trying to learn PCB routing, and I ordered most of the parts for it with leftover TJREVERB money. I never got around to assembling a prototype,
        because I knew that the first version wasn't going to work and most of the parts weren't going to be in stock for a second run.
      </p>
      <p>
        In October, I visited the Naval Academy with the TJ Space team to check out their groundstation setup, we also saw their CubeSat bus concept, which was extremely simple and used mostly breakout boards.
        I decided to start my own bus design using the Raspberry Pi and Iridium concept that we tested with TJREVERB, and mostly reusing parts that I had already ordered for the EPS design. 
      </p>

      <p>
        This page is a work in progress, last updated 23 Nov 2022
      </p>

    </Layout>

  )
}
