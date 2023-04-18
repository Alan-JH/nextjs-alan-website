import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

const title = "Bike Mods"

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

      <p>
        For some reason I never thought to start biking to go places until 2023. I did own a bicycle, a cheap but kinda decent Infinity Boss Three (Costco's hybrid bike),
        but it had been sitting out on the porch unused for over three years, and whenever I had used it it was only to go around the two streets that make up my neighborhood. 
        The tires had dry rotted, it was covered in dust and pollen, and some rust had collected. I got the tires replaced at a store, and decided to do the rest of the repairs 
        that I might need myself.
      </p>

      <center>
        <img src="/images/bike/first-servicing.jpg" loading="lazy"/>
      </center>
      
      <p>
        As I rode, I ran into issues that I gradually fixed. First, I had to adjust my rear derailleur, then I had to tighten the seat post clamp, then I had to adjust the brake
        tension... multiple times. I eventually replaced the chain and realized that the chain that came installed on the bike was 10 whole links too long, which is why the chain 
        would sometimes skip under a lot of torque in 7th gear. 
      </p>

      <center>
        <img src="/images/bike/firstchainswap.jpg" loading="lazy"/>
      </center>

      <p>
        In March, I decided to try modifying the bike, which is a 7 speed with only a rear derailler, to upgrade it to 21 speed by adding a 3 speed front sprocket, derailleur, and shifter.
        I already had a Nishiki 24" Pueblo 21 speed MTB that I had outgrown, so I took it apart and took the shifter, front derailleur, and crankset and sprocket off of it.
      </p>

      <center>
        <img src="/images/bike/nishikiframe.jpg" loading="lazy"/>
      </center>

      <p>
        I ended up having to buy a Shimano front derailleur anyways because the MTB derailleur was set up for top pull and my Infinity has cable runs for a bottom pull.
        I was able to reuse the friction shifter and sprocket (though I did break the chain guard off the front sprocket).
      </p>

      <center>
        <img src="/images/bike/derailleurmod.jpg" loading="lazy"/>
      </center>

      <p>
        After installing a new chain and adjusting the front derailleur tension, it shifted surprisingly smoothly.
      </p>

      <p>
        Eventually, I decided to spray paint the frame, using Spray.Bike paints, which involved taking the whole bike apart, spraying a couple coats and a gloss top coat,
        and waiting a week for it to cure. I did a Fluro Light Blue gradient on Whitechapel, and the end result was well worth it. I think it's safe to say I now have the coolest looking 
        Infinity Boss Three out there.
      </p>

      <center>
        <img src="/images/bike/final.jpg" loading="lazy"/>
      </center>

      <p>
        Last updated 17 Apr 2023
      </p>
    </Layout>

  )
}
