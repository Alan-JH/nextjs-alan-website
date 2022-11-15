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
const icon_size = "26"

// type Props = {
//   allPosts: Post[]
// }

export default function Home() {
  return (
    <Layout home layout_type={styles.containerHome}>
      <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>


        <h3>Currently</h3>
        <p>
        Senior at TJHSST
        <br></br>
        Mentor for TJ Space Program
        <br></br>
        Technical Lead for TJ UAV
        <br></br>
        Thinking about project team management

        </p>

        <h3>Previously</h3>
        <p>
        helped complete a <Link href="https://activities.tjhsst.edu/cubesat/">2U cubesat</Link>
        <br></br>
        designed electronics for rovers at Starpath Robotics
        <br></br>
        designed and built flight sim peripherals
        <br></br>
        </p>
        
        <h3>Fun</h3>

        I take <Link href="/photos/photos-landing" >
        <a>mediocre photos</a>
        </Link>
        <br></br>
        Probably listening to flipturn, Blue Rain Boots, Friday Pilot's Club, or I DONT KNOW HOW BUT THEY FOUND ME
        <br></br>
        Play the piano
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
