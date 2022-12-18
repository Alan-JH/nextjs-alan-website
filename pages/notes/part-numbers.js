import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Nostalgic Part Numbers"

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
      
      1 December 2022
      <p>
        Over the summer, a friend brought up a point that as an engineer, random four digit numbers bring nostalgia as part numbers. I thought I'd list a few of my nostalgic part numbers
      </p>
      <li>5118 - LM5118, the buck-boost controller I used for my failed DC power supply project</li>
      <li>6398 - L6398D, the STM32 mosfet driver I tried to build an FOC controller with</li>
      <li>7224 - AT7224, the TMotor motor that we have spent two months trying to buy for UAV club</li>
      <li>4373 - MAX4373, a latching current limiter that has a depletion P channel mosfet in its application datasheet despite depletion PMOSs being practically nonexistent</li>
      <li>32U4 - Atmega 32U4, the cheap microcontroller that I used for most of my USB HID devices</li>
      <li>165, 595 - Shift register ICs that I used for button inputs and LED outputs in my flight sim projects</li>
      <li>995, 996 - MG995 and MG996 servos, which we used a ton of in UAV</li>
      <li>1604, 1624 - The two 80 cent ATTiny chips that I use religiously for small embedded projects</li>
      <li>3232 - MAX3232, the RS232 to UART bridge that we used on TJREVERB</li>
      <li>3208 - MCP3208, the 12 bit ADC that I tend to default to</li>
      <li>2209 - TMC2209, the stepper motor driver advertised on many silent 3D printer driver boards. I blew up four of these at my Starpath internship…</li>
      <li>9602N - The Iridium SBD modem that we used on TJREVERB</li>
      <p>
        There are definitely more that I remember, but these are the ones that come off the top of my head
      </p>
    </Layout>

  )
}
