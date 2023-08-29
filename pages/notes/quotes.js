import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Quotes & Ideas from random people"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/notesheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <br></br>
      <Link href="/notes">
        <a>Back to notes</a>
      </Link>
      <br></br>

      Just an ongoing list of ideas that I find insightful.

      <h2>Engineering</h2>

      <h4>It's 10 times harder to build the machine that builds the machine</h4>

      This is a favorite of a friend of mine's (Shihao Cao), who started the UAV club at my school and has had a continued interest in 
      building efficient and long lasting teams. It's something I like to keep in mind in engineering project teams and on engineering projects,
      because it's difficult to build a good team, and its near impossible to work in a poorly managed team, of which I have done both.

      <h2>Learning</h2>

      <h4>Not trying hard enough is a much better problem to have than trying hard but being too dumb</h4>

      This is a paraphrase of something my boss Saurav Shroff said. Saurav is a startup founder who is a software engineer by training but has
      learned all sorts of skills and facts in mechanical and electrical engineering for his startup. It's something that I keep in mind when I 
      try and fail to do something; I evaluate whether I put in too little effort versus not having the knowledge or even state of mind necessary to
      do something.

      <h2>Music</h2>

      <h4>If you think what you played sounded bad, that's not a bad thing. It just means you have good taste</h4>
      
      My roommate Amrit Janardhanan once said this randomly, regarding improvising and writing music. I am a stereotypical classically trained pianist,
      so this hit especially hard, as I have basically never done improv or even noodled around with the instrument. I keep this in mind as I try to 
      develop my improv skills by making stuff up sometimes while practicing. Eventually, I will make something that fits my taste, and eventually after that
      I will flesh out what exactly my tastes are.

      <h4>You should improv or write as a musician, at least a little, because it is the pure expression of your taste</h4>

      Adam Neely said this, and this also hit me hard as a musician who really only has read and memorized classical sheet music rather than making music.
      I've never really seen piano as a creative outlet, despite me having played for 11 years (most of them forced by my parents...). As I appreciate listening
      to music more and expand my taste to include more instrumental music, I do want to try to become familiar with piano, but it is almost like starting to 
      learn all over again, just with some good technique skills.

    </Layout>

  )
}
