import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import "react-image-lightbox/style.css";

export default function FirstPost() {

  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Photography</title>
      </Head>

      <br></br>

      
      <h2>
        Samples
      </h2>


    </Layout>

  )
}

