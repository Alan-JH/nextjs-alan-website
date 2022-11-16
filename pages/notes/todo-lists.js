import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Rules for Todo Lists"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/notesheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <br></br>
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <br></br>

      11 November 2022
      <p>
      I first started writing to do lists in junior year just as a way to brain dump all the things I had to do, so I didn't feel so 
      confused and overwhelmed by feeling like I had a lot to do. I only made one once every few weeks, and didn't care much about 
      completing it. Over the summer, at my internship at Starpath, I made a todo.txt file on my desktop and started dumping the tasks 
      I needed to complete over the day or over the next week, removing them as I went, and noting what tasks were blocked by. 
      The mechanical engineer there had his own list that he called “the daily hitlist”. At the end of my last day, I took a picture 
      of the empty todo.txt, and I still have that picture on my phone. 
      </p>
      <p>
      When I got back home, I continued the habit, creating a todo file on my desktop and adding a line in rc.local (now Startup Apps 
      after I moved from Ubuntu to Pop OS) to open it every time I booted up to remind me of what I had to do. And since then, I have 
      developed some rules for myself, by trial and error. 
      </p>
      <p>
      First, do not add items that you know you will not complete in the short run. Back during Common App season, I added all my 
      remaining supplementals and my personal statement to the list, as well as “work on website”, which I knew I wouldn't have the 
      time or drive to do for the next month. As a result I just ignored that section of the list, and it wasn't useful to get it done. 
      Instead, I should have divided these tasks up into things I could do in an hour. For example, “first draft of Umich long supplement” 
      or “rough draft of Common App” or “update builds page of website.” 
      </p>
      <p>
      Additionally, give a mix of items that you will enjoy doing and items that you won't. Even if you know you will do that thing, 
      add it anyway. It feels good to cross it off. Doing something time consuming or challenging and not being able to cross it off 
      can set you off sometimes. As I write this, my todo list looks like:
      </p>
      <li>osborne rec form by december 3</li>
      <li>personal narrative final draft 11/14</li>
      <li>code up and test the batt discharger</li>
      <li>update builds page of website</li>
      <li>shift register board design</li>
      <li>route inhibit section of the piridium board</li>
      <p>
      The only items that I have to do are the first two. The rest are optional; not time sensitive, but more enjoyable and more likely 
      for me to do. If I just had the first two on my list, and I did my best to commit to the list, then I would be having a terrible 
      time. But by keeping a full plate, as <Link href="https://www.youtube.com/watch?v=tEo_8lsEUB0" target="_blank">Louis Rossmann</Link>&nbsp; 
      calls it, I can be productive and feel productive.
      </p>

      <p>
      I'm still learning as I go, but I think a to-do list, when done right, can help keep you on track, but when done wrong, 
      can pile on more stress without relieving any.
      </p>

    </Layout>

  )
}
