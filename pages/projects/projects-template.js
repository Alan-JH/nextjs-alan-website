import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import { notes_list_element_full } from '../../components/landing-elements'

const title = "Title"

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

      <h2>You May Also Like</h2>
      <div>
        {notes_list_element_full("35mm Film Scanner", "film-scanner", "projects")}
        {notes_list_element_full("Piridium CubeSat Bus", "piridium", "projects")}
        {notes_list_element_full("TJ UAV Camera Gimbal", "uav-gimbal", "projects")}
        {notes_list_element_full("FOC Motor Controller", "foc-controller", "projects")} 
        {notes_list_element_full("Lab Power Supply", "lab-psu", "projects")}
        {notes_list_element_full("TJREVERB Battery Capacity Test Code", "reverb-batt-tester", "projects")}
        {notes_list_element_full("TJREVERB Iridium Communications Protocol", "iridium-encoding", "projects")}
        {notes_list_element_full("TJREVERB Interface Board", "reverb-interface", "projects")}
        {notes_list_element_full("C-130 CNI-MU", "cni-mu", "projects")}
        {notes_list_element_full("PCB Reflow Hotplate", "pcb-heater", "projects")}
        {notes_list_element_full("TKL-86 Keyboard", "tkl-86", "projects")}
        {notes_list_element_full("Flight Sim Throttle v2", "throttle-v2", "projects")}
        {notes_list_element_full("Viper Sidestick", "viper-stick", "projects")}
        {notes_list_element_full("Flight Sim Rudder Pedals", "rudder-pedals", "projects")}
        {notes_list_element_full("TrackIR Clip", "trackir", "projects")}
        {notes_list_element_full("Scale Models", "scalemodels", "projects")}
      </div>
    </Layout>

  )
}
