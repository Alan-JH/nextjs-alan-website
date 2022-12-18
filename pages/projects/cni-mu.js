import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

const title = "C-130 CNI-MU"

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
        Around October '21, the owner of the server I had played DCS in last year, who goes by Matt, commissioned me to design a C-130 CNI-MU for him since he was in 
        the middle of developing a C-130 module for DCS. The CNI-MU is basically a flight management computer, allowing the pilot to enter waypoints, configure systems, etc.
        It's a display and a keypad with several function and alphabetical keys. I got to work CADing it up, and desiging a PCB with a keyboard matrix
        and TFT display with a spot for a driver breakout board.
      </p>
      <p>
        The first prototype had the microcontroller directly embedded because I had done it previously on my <a href="/projects/tkl-86">keyboard project</a>&nbsp;
        and I needed all 23 inputs for the keyboard matrixing and TFT driver interface. 
      </p>
      <center>
        <img src="/images/cni-mu/firstpcb.jpg"/>
        The first PCB prototype
      </center>
      <p>
        But for some reason the implementation of the microcontroller didn't work both times I tried assembling it. So I instead got a couple Adafruit itsybitsy 32u4s,
        which have more IO exposed than Arduino Pro Micros (but not quite as many as I could get by directly embedding). 
        To test my button matrix before committing to a PCB change, I had to do some very jank wiring
      </p>
      <center>
        <img src="/images/cni-mu/jankwiring.jpg"/>
      </center>
      <p>
        I also had to cut a wider slot with a hacksaw for the TFT display ribbon cable to pass through and plug into the driver breakout board underneath the main PCB
      </p>
      <center>
        <img src="/images/cni-mu/slotcut.jpg"/>
      </center>
      <p>
        I 3D printed the case, which mounted with M4 and M3 screws and standoffs, and was fairly low profile, sandwiching the PCB on both sides. I was using Omron B3F tact switches,
        and I 3D printed keycaps to go over them. It took a couple tries to get the sliding tolerance right.
      </p>
      <center>
        <img src="/images/cni-mu/blank.jpg"/>
      </center>
      <p>
        Matt asked me to put lettering on the keys, so I spent most of winter break sanding smooth and injecting white paint into 3D printed keycaps with lettering. In hindsight
        I really should've just gotten laser engraved caps from a shop like SendCutSend, but I didn't want to add more to the budget.
      </p>
      <center>
        <img src="/images/cni-mu/paintedkeys.jpg"/>
        <img src="/images/cni-mu/plugged.jpg"/>
        The final product
      </center>
      <p>
        I wrote up some Arduino code to read the keyboard matrix and act as a HID device, and left the display handling to Matt, since he was a software engineer and knew more about
        how the CNI-MU works. I made sure to let him know how to interface with the display in Arduino.
      </p>
      <p>
        Last updated 16 Dec 2022
      </p>
    </Layout>

  )
}
