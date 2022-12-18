import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

const title = "Viper Sidestick"

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
      <a href="https://www.thingiverse.com/make:875888" target="_blank">Thingiverse make</a>
      <p>
        In October '20, I started building my own joystick. I had been using a Saitek X52 Pro, which has a single spring for centering and no axis separation, which meant a deadzone
        in centering, and no feedback for crossing an axis. I found a <a href="https://www.thingiverse.com/thing:2496028" target="_blank">gimbal design by olukelo</a>&nbsp; that
        used cam centering and separated axes, but had no sensor mounts. I used <a href="https://www.thingiverse.com/thing:4544115" target="_blank">JFlyer81's F-16 joystick grip design</a>&nbsp;
        because I can't design anything remotely ergonomic. I had to print an adapter to make the two work together, and built all the electronics myself.
      </p>
      <center>
        <img src="/images/viperstick/gimbalparts.jpg"/>
        Gimbal parts
      </center>
      <h3>Grip</h3>
      <p>
        I first printed the grip in PLA and spent a few hours sanding it smooth, by going from 120 grit to 2000 grit sandpaper, but I stripped one of the tapped holes inside and had to reprint. 
      </p>
      <center>
        <img src="/images/viperstick/grip1.jpg"/>
      </center>
      <p>
        For the reprint, I decided to use gap filler primer along with sanding to give a smoother finish. Another member of the HOTAS discord recommended that I use automotive epoxy black paint
        for its durability.
      </p>
      <center>
        <img src="/images/viperstick/primed.jpg"/>
        <img src="/images/viperstick/painted.jpg"/>
      </center>
      <p>
        The switches and hats all use 6mm tact switches in 3D printed enclosures, and the dual stage trigger uses two switches and a pen spring.
      </p>
      <center>
      <video controls src={"/images/viperstick/trigger.mp4"} style={{ width: "800px", height: "450px" }}/>
      </center>
      <h3>Sensor mounts</h3>
      <p>
        I had to design my own sensor mounts into the gimbal, so I used 5mm diameter 10mm long neodymium magnets in slots in the gimbal parts, and mounted KMA210 magrez sensors over them.
        Hall sensors would not work in this configuration, as they are best used when sandwiched between magnets, not placed over them.
      </p>
      <center>
        <img src="/images/viperstick/baremount.jpg"/>
        Testing the sensor mount
        <img src="/images/viperstick/coveredmount.jpg"/>
        With cover and strain relief
        <img src="/images/viperstick/strainrelief.jpg"/>
        With additional hot glue for strain relief
      </center>
      <h3>Grip electronics</h3>
      <p>
        For the buttons in the grip, I used three shift registers mounted on veraboard to shift the 23 button inputs out over three data lines. I had to take wire from CAT5 ethernet cable 
        because the 26 gauge wire I had was too thick to stuff inside the grip.
      </p>
      <center>
        <img src="/images/viperstick/insides.jpg"/>
      </center>
      <h3>Base electronics</h3>
      <p>
        For the base electronics, I used an Arduino Pro Micro running MMJoy2 to act as a USB HID device, and an MCP3208 12 bit ADC to get a higher resolution reading out of the KMA210 sensors.
        I put these on perfboard and used JST-XH connectors for the sensors and grip.
      </p>
      <center>
        <img src="/images/viperstick/adcboard.jpg"/>
      </center>
      <h3>Final assembly</h3>
      <p>
        The final product
      </p>
      <center>
        <img src="/images/viperstick/finished1.jpg"/>
        <img src="/images/viperstick/finished2.jpg"/>
        <img src="/images/viperstick/finished3.jpg"/>
      </center>
      <p>
        Last updated 16 Dec 2022
      </p>
    </Layout>

  )
}
