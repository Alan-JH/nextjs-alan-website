import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

const title = "Alan's Shooting Checklist"

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

      24 December 2022
      <p>
        Here are a few items I always check when taking a shot, when I have the time (not action).
      </p>
      <h3>Exposure</h3>
      <p>
        If shooting digital, check the histogram. I do like to expose to the right and edit back down.
      </p>
      <p>
        If shooting film, check whether lighting requires overexposure or underexposure. 
      </p>
      <p>
        In either case, check whether the shutter speed is too slow for a handheld shot.
      </p>
      <h3>Framing</h3>
      <p>
        Check the composition obviously, but also make sure the shot is level against the viewfinder frame.
        If there are any people, cars, other moving distractions in shot, wait for a good aesthetic or until they are gone.
      </p>
      <h3>Existential</h3>
      <p>
        Ask whether this is a shot worth taking. More applicable to film than digital, but I do try to ask this question more often with digital.
      </p>
    </Layout>

  )
}
