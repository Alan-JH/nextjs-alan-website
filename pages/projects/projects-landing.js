import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
import { notes_list_element, notes_list_element_full } from '../../components/landing-elements'

export function full_post_list(){
  return /*<ul>
    {notes_list_element_full("Remote Control F-86", "f86", "builds")}
    {notes_list_element_full("Electric Falcon 9 VTOL drone", "lodestar", "builds")}
    {notes_list_element_full("DIY Electric Longboard", "longboard", "builds")}
    {notes_list_element_full("Tower of Cards", "tower-of-cards", "builds")}
    {notes_list_element_full("All the Remote Control Aircraft I Built", "hangar", "builds")}
  </ul>*/
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
