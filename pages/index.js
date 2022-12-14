import Head from 'next/head'
import Layout from '../components/layout'
import { siteTitle } from "../components/layout.js"
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'
import { front_page_post_list } from './notes/notes-landing'

import Post from '../interfaces/post'
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
        <meta name="google-site-verification" content="3G5QUBokac5BO13aqWAwOeotGapxFTlmjd5r6hyCyic" />
      </Head>

      <section className={utilStyles.headingMd}>


        <h3>Currently</h3>
        <p>
        <img src="/images/icons/Tjlogo.png"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://en.wikipedia.org/wiki/Thomas_Jefferson_High_School_for_Science_and_Technology"
          comment="Image by Wikipedia"
        />&nbsp;&nbsp;Senior at TJHSST
        <br></br>
        <img src="/images/icons/tjspacelogo.jpg"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://activities.tjhsst.edu/cubesat/"
        />&nbsp;&nbsp;Mentor for TJ Space Program
        <br></br>
        <img src="/images/icons/tjuavlogo.png"
          width  = {icon_size}
          height = {icon_size - 10}
          align = "left"
          style={{marginTop: 3}}
          href="https://github.com/tj-uav"
        />&nbsp;&nbsp;Technical Lead for TJ UAV
        <br></br>
        🛠️&nbsp;&nbsp;&nbsp;Thinking about project team management

        </p>

        <h3>Previously</h3>
        <p>
        <img src="/images/icons/tjreverb.jpeg"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://github.com/TJREVERB"
        />&nbsp;&nbsp;Launched a <a href="https://tjhsst.fcps.edu/features/launch-tjreverb-culmination-seven-year-project-tj-space" target="_blank">2U cubesat</a>
        <br></br>
        🌕&nbsp;&nbsp;&nbsp;designed electronics for rovers at Starpath Robotics
        <br></br>
        ✈️&nbsp;&nbsp;&nbsp;designed and built flight sim peripherals
        <br></br>
        </p>
        
        <h3>Fun</h3>

        <img src="/images/icons/mesuper.jpg"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
        />&nbsp;&nbsp;Check out my <Link href="/photos/photos-landing" >
        <a>photos</a>
        </Link>
        <br></br>
        🎵&nbsp;&nbsp;&nbsp;Probably listening to flipturn, RMCM, Friday Pilot's Club, or IDKHOW
        <br></br>
        🎹&nbsp;&nbsp;&nbsp;Play the piano
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
