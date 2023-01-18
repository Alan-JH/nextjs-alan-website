import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Thornton Beach"

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

      17 January 2023

      <p>
        It's past midnight the night before the DiffE final I've not prepared enough for. I should've been asleep an hour ago, 
        but I am half awake, in my head sitting at Thornton Beach in July.
      </p>
      <p>
        Thornton is a feeling of isolation like no other. 
        The cliffs above the beach are separated by a valley and even taller cliff face from the Daly City homes a few hundred yards behind.
        There's a sprinkling of joggers and dog walkers among the trails and shoreline, but it's quiet besides the light wind. 
        A thick layer of clouds seals off a pocket of a couple hundred feet of air isolated from the sun. 
        I could scream, sing, shout, and it would all drown out in the emptiness. 
      </p>
      <p>
        I am miles away from the city center, from the five or so people I can even begin to call friends in the entire Bay Area, 
        or the entirety of Northern California, for that matter. 
        Somewhere in SoMa, my boss slaves away on investor calls and hardware work on a Saturday. 
        My suitemates go around Mission District doing whatever summer intern-off-the-job things they may among the city bustle. 
        The close friends I have are thousands of miles to the east, doing god knows what. 
        My parents keep the house without me for the longest time in seventeen years.
      </p>
      <p>
        I am on week six of a nine week internship, recovering from three of the shittiest weeks, 
        when electronics work was on hold to write up a NASA BTIL submission for a rover we haven't fully designed yet, 
        and to wait for the MechE team to finish their side of the rover iteration. 
        I come home to stare at an empty CommonApp personal statement, trying to force ideas out, but desparate to be anywhere else. 
        But things are looking up. Hardware work is back on track, and I just worked two twelve hour days to finish up the wire harnessing for Rover 3. 
        In a week, I leave for the Smallsat conference, and I'll have to plan my work around my absence. 
        In three weeks, I'll have to wrap up my work and head home, and somehow adjust to the reality of high school again.
      </p>
      <p>
        But all that is neither here nor now. 
        Here I sit, looking out over the Pacific, miles away from anyone I know, momentarily forgetful of the past and oblivious to the future. 
      </p>

    </Layout>

  )
}
