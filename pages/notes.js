import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import styles from '../components/layout.module.css'
import { notes_list_element, notes_list_element_full } from '../components/landing-elements'
  
export function full_post_list(){
    return <div>
      {notes_list_element_full("How I (Mostly) Made This Website", "how-i-made-this-website", "notes")}
      {/*notes_list_element_full("On To-do lists", "todo-lists", "notes")*/}
      {notes_list_element_full("Nostalgic Part Numbers", "part-numbers", "notes")}
      {notes_list_element_full("Lens Comparison", "lens-comparison", "notes")}
      {/*notes_list_element_full("Thornton Beach", "thornton", "notes")*/}
    </div>
  }
  
    export default function FirstPost() {
        return (
            <Layout layout_type={styles.container} bgimage="/images/headers/notesheader.jpg" pagetitle="Notes" headertextcolor="white">
            <Head>
                <title>Notes</title>
            </Head>

            <h2>A place for random thoughts and posts</h2>

            {full_post_list()}

            <br></br>

            </Layout>

        )
    }
  