import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
import { notes_list_element, notes_list_element_full } from '../../components/landing-elements'

export function full_post_list(){
  return (
    <div>
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
      {notes_list_element_full("F/A-18C UFC", "ufc", "projects")}
      {notes_list_element_full("Flight Sim Throttle v2", "throttle-v2", "projects")}
      {notes_list_element_full("Viper Sidestick", "viper-stick", "projects")}
      {notes_list_element_full("Flight Sim Throttle v1", "throttle-v1", "projects")}
      {notes_list_element_full("Flight Sim Rudder Pedals", "rudder-pedals", "projects")}
      {notes_list_element_full("TrackIR Clip", "trackir", "projects")}
      {notes_list_element_full("Scale Models", "scalemodels", "projects")}
    </div>
  )
}

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle="Projects" headertextcolor="white">
      <Head>
        <title>Projects</title>
      </Head>
      
      <h2>Some of the projects that I have worked on</h2>
      These range from personal projects to subprojects of larger team projects, from unfabricated to finished product, and from fully software to automated electromechanical.
      Ranked in roughly chronological order, with newer projects at the top.

      {full_post_list()}

      <br></br>

    </Layout>

  )
}
