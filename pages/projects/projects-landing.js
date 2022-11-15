import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
import { notes_list_element, notes_list_element_full } from '../../components/landing-elements'

export function full_post_list(){
  return (
    <div>
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
      
      <h2>The projects that I have worked on</h2>

      {full_post_list()}

      <br></br>

    </Layout>

  )
}
