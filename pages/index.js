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

        <h3>For Fun Builds</h3>
        🏗️ &nbsp; designed my own <Link href="/builds/f86" >
        <a>remote control F-86. Plans here!</a>
        </Link> 

        <br></br>

        🚀 &nbsp; developed an <Link href="/builds/lodestar" >
        <a>electric Falcon 9 VTOL drone</a>
        </Link>

        <br></br>

        🛹 &nbsp; built my own <Link href="/builds/longboard" >
        <a>electric longboard</a>
        </Link>

        <br></br>

        <div>
        <img src="/images/tower-of-cards/poker-cards.png"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://www.flaticon.com/free-icons/playing-cards"
          comment="Playing cards icons created by Freepik - Flaticon"
        />
        &nbsp;&nbsp; built a 7' 7" <Link href="/builds/tower-of-cards" >
        <a>tower of cards</a>
        </Link>
        </div>

        <div>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-hangar-airport-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
          width  = {icon_size}
          height = {icon_size}
          align = "left"
          style={{marginTop: 3}}
          href="https://icons8.com/icon/4AAzlm0vDwwY/hangar"
        /> &nbsp;&nbsp; all my <Link href="/builds/hangar" >
        <a>other remote control aircraft</a>
        </Link> builds
        </div>
        
        <h3>Happiness</h3>

        I take <Link href="/photos/photos-landing" >
        <a>photos</a>
        </Link>

        <h3>Random Thoughts</h3>
        {front_page_post_list()}

        <h3>Say Hi!</h3>

        <p>literally dm me on&nbsp;
          <a href="https://twitter.com/shihao_cao" className="button" target="_blank">Twitter</a>
          &nbsp;haha
        </p>
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
