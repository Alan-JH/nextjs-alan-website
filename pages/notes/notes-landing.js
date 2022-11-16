import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
import { notes_list_element, notes_list_element_full } from '../../components/landing-elements'

export function front_page_post_list(){
    return <ul>
      {notes_list_element("Seeking Epilogue", "notes")}
      {/* {notes_list_element("Packing for SpaceX", "notes")} */}
      {notes_list_element("Marino Pasta Recipe", "notes")}

      {/* {notes_list_element("Rapid Prototyping Quick Reference", "notes")} */}
      <li><Link href="/notes/notes-landing" >
      <a>more</a>
      </Link>
      </li>
    </ul>
  }
  
  export function full_post_list(){
    return <div>
      {notes_list_element_full("How I (Mostly) Made This Website", "how-i-made-this-website", "notes")}
      {notes_list_element_full("On To-do lists", "todo-lists", "notes")}
    </div>
  }
  
    export default function FirstPost() {
        return (
            <Layout layout_type={styles.container} bgimage="/images/headers/notesheader.jpg" pagetitle="Notes" headertextcolor="white">
            <Head>
                <title>Notes</title>
            </Head>

            <h2>A place for random thoughts and posts that don't fall elsewhere</h2>

            {full_post_list()}

            <br></br>

            </Layout>

        )
    }
  