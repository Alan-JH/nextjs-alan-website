import Head from 'next/head'
import Layout from '../components/layout'
import { siteTitle } from "../components/layout.js"
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'

import { getAllPosts } from '../lib/api'

const neg_margin = -12
const icon_size = "30"

// type Props = {
//   allPosts: Post[]
// }

export default function Home() {
  return (
    <Layout home layout_type={styles.containerHome}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="3G5QUBokac5BO13aqWAwOeotGapxFTlmjd5r6hyCyic" />
      </Head>

      <section className={utilStyles.headingMd}>

        <h3>Currently</h3>
        <p>
        <img src="/images/icons/purduep.png"
          width  = {icon_size}
          height = {icon_size-12}
          align = "left"
          style={{marginTop: 8}}
          href="https://en.wikipedia.org/wiki/Purdue_Boilermakers"
          comment="Image by Wikipedia"
        />&nbsp;&nbsp;Freshman at Purdue University
        <br></br>
        <img src="/images/icons/psr.jpeg"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://www.linkedin.com/company/purduesolar"
        />&nbsp;&nbsp;Working on MPPT @ Purdue Solar Racing
        <br></br>
        </p>

        <h3>Things I've Done</h3>
        <p>
        <img src="/images/icons/Tjlogo.png"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://en.wikipedia.org/wiki/Thomas_Jefferson_High_School_for_Science_and_Technology"
          comment="Image by Wikipedia"
        />&nbsp;&nbsp;Survived four years at TJHSST
        <br></br>
        <img src="/images/icons/tjspacelogo.jpg"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://activities.tjhsst.edu/cubesat/"
        />&nbsp;&nbsp;Designed a CubeSat bus for <a href="https://activities.tjhsst.edu/cubesat/" target="_blank">TJ Space Program</a>
        <br></br>
        <img src="/images/icons/tjuavlogo.png"
          width  = {icon_size}
          height = {icon_size - 10}
          align = "left"
          style={{marginTop: 3}}
          href="https://github.com/tj-uav"
        />&nbsp;&nbsp;Team Captain for <a href="https://tj-uav.github.io/home" target="_blank">TJ UAV</a>&nbsp; at SUAS 2023 (built an autonomous plane)
        <br></br>
        <img src="/images/icons/tjreverb.jpeg"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://github.com/TJREVERB"
        />&nbsp;&nbsp;Launched a <a href="https://tjhsst.fcps.edu/features/launch-tjreverb-culmination-seven-year-project-tj-space" target="_blank">2U cubesat</a>
        <br></br>
        🌕&nbsp;&nbsp;&nbsp;Built moon rovers at Starpath Robotics
        <br></br>
        </p>
        
        <h3>Fun</h3>

        <img src="/images/icons/f3hp.jpeg"
          width  = {icon_size}
          height = {icon_size-5}
          align = "left"
          style={{marginTop: 3}}
        />&nbsp;&nbsp;Check out my <Link href="/photos" >
        <a>photos</a>
        </Link>
        <br></br>
        🎵&nbsp;&nbsp;&nbsp;Probably listening to flipturn, RMCM, or Mt. Joy
        <br></br>
        🎹&nbsp;&nbsp;&nbsp;Play the piano, learning guitar
        <br></br>
        ⛷&nbsp;&nbsp;&nbsp;&nbsp;Seeking out the moguls
        <br></br>
        🛠️&nbsp;&nbsp;&nbsp;Always looking for projects to build
      </section>

    </Layout>
    
    
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
