import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const images = [
  image("astro", "DSC05298", 6000, 4000, "Soligor Wide-Auto", ".JPG"),
  image("astro", "DSC05299", 6000, 4000, "Soligor Wide-Auto", ".JPG"),
  image("astro", "DSC05301", 6000, 4000, "Soligor Wide-Auto", ".JPG"),
  image("astro", "DSC05303", 6000, 4000, "Soligor Wide-Auto", ".JPG"),
  image("astro", "DSC05306", 6000, 4000, "Soligor Wide-Auto, under a street lamp", ".JPG"),
  image("astro", "DSC05307", 6000, 4000, "Sony 16-50mm Kit Lens", ".JPG"),
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Astro Photography" headertextcolor = "white">
      <Head>
        <title>Alan's Astro Shots</title>
      </Head>
      {galleriesHeader()}

      I have only attempted astro shots once, but I do want to try again whenever I have a chance to out West where the light pollution is better. My strategy so far has been to sit the camera on the ground, hit the shutter release (at 30 second shutter), and walk away...

      {gallery(images)}

      Last updated 8 November 2022

    </Layout>

  )
}

