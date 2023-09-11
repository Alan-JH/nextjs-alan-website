import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import { notes_list_element_full } from '../../components/landing-elements'

const title = "TKL-86 Keyboard"

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
        Right before junior year, I decided to build my own keyboard. I chose Kailh Box Browns for the main keys and Kailh Box Jades for some of the modifier keys.
        I chose a custom 86 key tenkeyless layout, since I never used number pad and wanted the extra desk space, but also wanted the insert, home, delete, etc. keys.
        I used <a href="https://github.com/jeroen94704/klepcbgen" target="_blank">KLE PCB Generator</a>&nbsp; to generate the switch layout, then embedded an ATMega32u4
        IC directly onto the board. 
      </p>
      <p>
        I ordered it and spent about an hour drag soldering the ATMega32u4 on (since this was before I had a hot air station), and another hour soldering all 86 SMD diodes.
        This was my second time drag soldering, the first time being the <a href="ufc" target="_blank">F-18C UFC</a>. 
      </p>
      <center>
        <img src="/images/keyboard/soldering.jpg" loading="lazy"/>
      </center>
      <p>
        I designed up a 3D printed case, and went through several iterations trying to get the tolerance right. I ended up doing a lot of snipping with pliers to get the
        stabilizers to not get stuck, and the case is a little warped, but it works. I also added in tact switches for media control buttons in the top right. Finally,
        I generated a firmware in QMK and flashed it. 
      </p>
      <center>
        <img src="/images/keyboard/final.jpg" loading="lazy"/>
        The finished product
      </center>
      <p>
        I still daily drive this keyboard, and it continues to annoy my parents and anyone else who happens to be in the same room while I'm typing.
      </p>
      <p>
        Last updated 5 Dec 2022
      </p>
      <h2>You May Also Like</h2>
      <div>
        {notes_list_element_full("C-130 CNI-MU", "cni-mu", "projects")}
      </div>
    </Layout>
  )
}
