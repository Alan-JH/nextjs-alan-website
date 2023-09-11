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
        Design files and further documentation at this <a href="https://github.com/Alan-JH/piridium-bus" target="_blank">Github Repo</a>
      </p>
      <p>
        Piridium is a CubeSat bus design employing a similar design philosophy to Pycubed, but using an Iridium 9602N Modem and Raspberry Pi Zero flight computer
        incorporating design lessons from TJREVERB, the 2U CubeSat that I worked on. It is designed to be a low cost and easy to use CubeSat bus with basic payload interfacing. 
        The Raspberry Pi allows flight software development in an operating system, which is more accessible to students than precompiled firmware. The Iridium modem uses the 
        Iridium constellation for communication with the ground, which is a paid subscription service and eliminates the need for a hardware groundstation and antenna tracking software.
      </p>

      <center>
        <img src="/images/piridium/stack.jpg" loading="lazy"/>
      </center>

      <h3>Design Process & Philosophy</h3>
      <p>
        I started the design in September '22, from a previous EPS project I had been working on. I worked in KiCAD, and started with the goals of keeping the design 
        simple while still incorporating necessary protections and telemetry. The idea was to implement a bus around the Raspberry Pi Zero and Iridium 9602N Modem that 
        TJREVERB used. TJREVERB used several stacked boards and converted UART to RS232 just for the modem breakout board to convert back to UART, so there was a lot of 
        space and complexity to be saved. Additionally, the EPS and battery we used on TJREVERB included a lot of features we didn't need and never used, so I wanted to 
        design my own power electronics for this bus (similarly to Pycubed).
      </p>
      
      <p>
        Components were specced to AEC-Q100/101/200 Automotive grade where practical, as these go through more specific thermal and mechanical testing but aren't nearly 
        as expensive as space grade components. The only downside is the lack of radiation testing. I added in latching current limiters to protect against latchup due to SEEs.
        As with most low cost CubeSat hardware, TID is assumed to be a non issue for most consumer hardware in low earth orbit, given the short mission duration (1 year or so) most CubeSats have.
      </p>

      <p>
        I ended up iterating three times from September to January, though I only ordered and assembled the first two iterations as the third iteration fixed an issue that could be 
        fixed with a jumper wire modification. The second and third iterations both fixed design mistakes from the previous versions. I ordered and assembled the boards using surplus 
        REVERB funding and parts, with my own solder paste setup and hot air station. I was especially anxious about whether the power electronics would work, so I assembled the first 
        version section by section (5V regulators, then solar regulators, then inhibits), testing each section as I went.
      </p>

      <center>
        <img src="/images/piridium/midassembly.jpg" loading="lazy"/>
        In the middle of assembling the power electronics
      </center>

      <center>
        <img src="/images/piridium/lcltest.jpg" loading="lazy"/>
        Testing the latching current limiters during winter break
      </center>

      <center>
        <img src="/images/piridium/outdoortest.JPG" loading="lazy"/>
        Testing Iridium connectivity outside
      </center>

      <h3>Tech Specs</h3>
      <li>Flight Computer: Raspberry Pi Zero W</li>
      <li>Radio: Iridium 9602N Short Burst Data</li>
      <li>Clock: DS3232M RTC with CR2032 Battery Backup</li>
      <li>Battery: Six 18650 Li-Ion cells (builder's discretion, recommend protected 3-4Ah) in a 3P2S configuration</li>
      <li>Battery protection: ~7.7A overcurrent protection (charge & discharge), 4.29V/cell overcharge protection with hysteresis down to 4.05V/cell, 3V/cell overdischarge protection with hysteresis up to 3.2V/cell</li>
      <li>Solar input: 4 input connectors feeding two regulators with 25V Max (limited by the voltage divider for telemetry) with charge cutoff at 8.27V, MPPT voltage settable using trim pots</li>
      <li>Output regulation: 2 separated 5V rails up to 3A output, one for the radio, the other for the Raspberry Pi, each with latching current limiters and a watchdog timer</li>
      <li>Payload connection: 1x SPI bus with one dedicated chip enable pin, 1x I2C bus, 1x unused configurable GPIO pin, switchable battery power (no overcurrent protection); see schematic for pinout</li>
      <li>Telemetry: Battery charge current and solar input voltage for both solar regulators, battery input voltage and current, payload battery current</li>
      <li>Antenna connector: Standard SMA vertical</li>
      <li>Inhibits: Two discharge inhibits (do not block charge), two RBF (one low side ground disconnect, one high side power disconnect, block both charge and discharge)</li>

      <p>
        See the Github README file for more info on chip selection and usage.
      </p>

      <center>
        <img src="/images/piridium/avionicsfinal.jpg" loading="lazy"/>
      </center>

      <h3>Issues and Future Work</h3>
      <p>
        The only major hardware issue after assembling the boards is that the battery balancing IC does not seem to work. This is very likely to be an issue with
        how I assembled the board, but I have not been able to debug it.
      </p>

      <p>  
        Due to the limited I/O on the Raspberry Pi Zero, I only broke out a few 
        GPIO, 1 SPI, and 1 I2C to the payload connector on the avionics board, which is less than ideal for more complex missions that require more hardware interfaces.
      </p>

      <p>
        Piridium is still untested for space conditions, as I never got the chance to thermovac or vibration test through my research lab at school. 
        One of the biggest concerns is testing the cylindrical cell batteries, as these tend to have the most stringent test requirements from launch 
        providers. It's safe to say Piridium won't be flying off the ISS anytime soon.
      </p>

      <p>
        Last updated 11 September 2023
      </p>

    </Layout>

  )
}
