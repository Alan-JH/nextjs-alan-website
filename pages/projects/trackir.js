import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "TrackIR Clip"

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
        <a href="https://www.thingiverse.com/thing:4620349" target="_blank">Thingiverse Thing</a>
      </p>
      <p>
        Soon after I started playing DCS World with my cheap Logitech joystick, I wanted to have a head tracking solution to not have to use the single hat on the stick for looking around.
        TrackIR is the most popular solution for headtracking, and it uses three infrared LEDs on a clip attached to a headset and an IR camera that plots the three points and determines
        head position based on the positions of the LEDs. But a TrackIR camera and clip together costs around $150. I saw a guide online for building a clip for under $15.
      </p>
      <p>
        I copied the layout of an original TrackIR clip that I found on a forum and cut it out of acrylic with a small saw. I used three SFH485P IR LEDs, which are pretty standard for doing this.
        Originally, I used a 9V battery with the three LEDs in series, but this produces a lot of power loss through the current limiting resistor, so I switched to three AAs and the LEDs in parallel.
        The camera was a PS3 Eyecam with a cut up floppy disk as a visible light filter running opentrack, an open source software meant for plotting the IR LED positions to joystick axes.
      </p>
      <center>
        <img src="/images/trackir/breadboard.jpg"/>
        <img src="/images/trackir/headset.jpg"/>
      </center>
      <p>
        This setup was pretty jank, with lots of electrical tape, and the batteries were pretty heavy. So after I got a 3D printer, I designed a second version of the clip, with a 3D printed housing
        and 3.7V 1200mAh LiPo battery. This is how I first learned about lithium battery safety, and safe charging and discharging. I used a TP4056 breakout board for charging, with Rprog set to 600mA.
        At first, I also tried swapping out the DW01 battery protection IC for a better IC (that im not remembering the name of) which set the overdischarge cutoff at 3V instead of 2.4V. 
        But I was terrible at soldering, and ripped pads and broke a couple boards, so I stuck to the DW01. The LEDs are placed with two in series and one in parallel with those two instead of three
        in parallel for maximum efficiency, and as a result the clip goes dim before the battery discharges past 3V anyways. I attached the clip to my headset with magnets in the clip and a double sided 
        taped plate with two M8 washers inside.
      </p>
      <center>
        <img src="/images/trackir/insides.jpg"/>
        <img src="/images/trackir/attached.jpg"/>
        <img src="/images/trackir/detached.jpg"/>
      </center>

      <p>
        I used this setup for an entire year of flight simming, until I abandoned the hobby, so the clip worked pretty well and was pretty convenient. A few months ago I found out the battery was bulging,
        so I had to remove and dispose of it. 
      </p>

      <p>
        Last updated 8 Dec 2022
      </p>
    </Layout>

  )
}
