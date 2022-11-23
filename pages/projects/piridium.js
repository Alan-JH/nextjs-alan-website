import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import { triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Piridium Bus"

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
        Piridium is a (currently WIP) CubeSat bus design employing a similar design philosophy to Pycubed, but using an Iridium 9602N Modem and Raspberry Pi Zero flight compuoter
        incorporating the lessons from TJREVERB, the 2U CubeSat that I worked on. It is designed to be a low cost and easy to use CubeSat bus with basic payload interfacing. 
        The design is divided into an avionics board and a battery board, with the battery board housing six 18650 cells, and balancing and protection circuitry, and the avionics 
        board housing the inhibits, RBF circuitry, 5V rail regulators for Iridium and RPi, payload power control circuitry, solar input regulators, telemetry readouts, an RTC and IMU, 
        and the RPi and Iridium themselves. Most components are automotive grade at a baseline, to survive temperature and mechanical stresses, and most components are also selected based 
        on radiation testing for tolerance for TID and SEE. 
      </p>

      {triple_centered_img_block()}

      <h2>History</h2>
      <p>
        The first form of what would become this project started in October 2021, while I was working on TJREVERB. We had just flashed a new operating system on the Raspberry Pi,
        but we didn't realize that there had been a script in the old operating system that reset the EPS watchdog timer every 30 seconds, so the new operating system started rebooting
        every four minutes because the EPS watchdog was triggering a power reset. I spent a whole two weeks debugging this, going from tangential issue to tangential issue, and not 
        properly probing with an oscope until the end, at which point I realized that it was the four minute watchdog reset. During those two weeks, I went from blaming the flight computer 
        to blaming the EPS and back again several times, and I started on a stopgap EPS design in case we had, indeed, fried our $10,000 Clydespace EPS.
      </p>
      <p>
        I simply dubbed the first design stopgap-eps, and designed out an entire schematic with all the power distribution modules, voltage regulators, solar input trackers, and telemetry readings
        that the Clydespace had. The general idea was for it to be a cheap EPS that could provide all the functions that we needed out of the Clydespace during flatsat testing, at least until we could
        order another. The schematic on this one is pretty messy, and I never got to routing it. It took only a couple weeks, and after we confirmed that the Clydespace was functioning fine, I 
        put the project on hold indefinitely.
      </p>
      <p>
        Over winter break that year, I got bored, and started on a couple PCB designs just to pass some time. I decided to restart the EPS project, this time under the name TJ-EPS. I saw the 
        issues with the stopgap-eps schematic, and redid it from scratch. The included functions were mostly the same, although I made a few changes to cut down on components and complexity, for example
        placing the telemetry and telecommand microcontroller power before the latching current limiters for the 3.3V rail, so that I could rely on the microcontroller to reset these current limiters rather
        than using analog timer chips. Overall, the objective was to design an EPS similar to the Clydespace or GOMSpace equivalents, but much lower cost.
      </p>
      {triple_centered_img_block()}
      <p>
        This time around, I also designed a battery board, which included four 18650 cells and protection and telemetry circuitry, again similar to the Clydespace design. I started routing everything around
        March of 2022, and delegated the routing of the EPS board to some poor sophomore who wanted to learn how to route PCBs (shoutout Kiran Donelly '24). We went through many cycles of him sending me a design
        and me critiquing it. Around April to May of 2022, the project slowed down, because routing was done. I ended up moving the solar input regulators to a separate daughterboard that would stack on top of the
        EPS board. I ordered all the active components that I anticipated would go out of stock due to the chip shortage using leftover TJREVERB money that was going to expire that year, but I put off ordering
        the boards until after I came back from my internship at Starpath. Once I ordered the boards though, I never assembled them, because I *knew* that such a complex design would not work the first time.
      </p>
      <p>
        Finally, piridium as it is now started when I visited the Naval Academy in October 2022 with the TJ Space team to check out their groundstation setup, and Dr. Kang showed me a CubeSat bus concept that they were going
        to try to put up in space, which was much simpler than anything I had designed. So I started from scratch again and decided to design a Raspberry Pi plus Iridium bus with the components that I already 
        had from TJ-EPS. Eventually, the design grew in complexity as I added parts for SEE mitigation and other failure mode considerations, but this was a much more organic addition of complexity with a good amount
        of consideration for every added part, unlike TJ-EPS, where I just added everything because a certain other EPS design had it.
      </p>

    </Layout>

  )
}
