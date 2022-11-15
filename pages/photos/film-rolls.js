import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const first_roll = [
  image("filmrolls/1", "000018190005", 3130, 2075, "6 Nov 2022 Accidentally opened the back of my camera for this one...", ".jpg"),
  image("filmrolls/1", "000018190006", 3130, 2075, "6 Nov 2022 Night shot that turned out unexpectedly well", ".jpg"),
  image("filmrolls/1", "000018190007", 3130, 2075, "6 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190008", 3130, 2075, "6 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190010", 3130, 2075, "6 Nov 2022 Obligatory moon shot with the chungus telephoto", ".jpg"),
  image("filmrolls/1", "000018190014", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190015", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190016", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190017", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190018", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190019", 3130, 2075, "8 Nov 2022 One of my favorites", ".jpg"),
  image("filmrolls/1", "000018190020", 3130, 2075, "8 Nov 2022 Gorgeous film bokeh", ".jpg"),
  image("filmrolls/1", "000018190021", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190022", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190023", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190024", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190025", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190026", 3130, 2075, "8 Nov 2022 Grados deserve to be on film", ".jpg"),
  image("filmrolls/1", "000018190027", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190028", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190029", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190030", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190031", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190032", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190033", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190034", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190035", 3130, 2075, "8 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190036", 3130, 2075, "10 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190037", 3130, 2075, "10 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190038", 3130, 2075, "10 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190039", 3130, 2075, "10 Nov 2022", ".jpg"),
  image("filmrolls/1", "000018190040", 3130, 2075, "10 Nov 2022", ".jpg"),
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Film Photos</title>
      </Head>
      {galleriesHeader()}

      Here is my first roll of Ektar 100 on my Pentax. Most of these were taken on my Super Takumar 50mm. All unedited

      {gallery(first_roll)}

      Last updated 14 November 2022

    </Layout>

  )
}

