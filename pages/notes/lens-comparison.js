import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'
import {images} from '../../public/photography/lens-testing/list'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

const title = "Title"

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
      27 December 2022

      <p>
        Since I got a Nikon F to Sony E adapter (adding to my M42 to Sony E adapter), I decided to compare most of my lenses with my Sony a6000. Keep in mind
        that the a6000 is an APSC body, so it will hide some edge imperfections that will show on full frame or 35mm film.
        I chose 16mm, 25mm, 35mm, 50mm, 100mm, 135mm, and 200/210/230mm for standard-ish focal lengths,
        and took two shots each, one wide open and one stopped down to f8 (Except for the 50mm takumar because
        it's so much faster, so I took three, one at f1.4, one at f4, and one at f8). The aperture ring on the
        Pro Automatic telephoto is broken, so I couldn't set f8 exactly, but I did stop it down to a similar f-stop each shot based on the auto exposure shutter speed.
      </p>
      <center>
        <img src="/images/lens-comparison/lenses.jpg" loading="lazy"/>
      </center>
      <p>
        These are the lenses tested. From top to bottom, left to right, a Pro Automatic 90-230mm f4.5, a Sony E 55-210mm f4.5-6.3 OSS,
        a Nikkor 25-50mm f4 AI-S, a Tamron 28-200mm f3.8-5.6 LD Aspherical IF, a Sony E 16-50mm f3.5-5.6 PZ OSS, a Super Takumar 50mm f1.4
        (7 element), a Super Takumar 135mm f3.5, and a Nikkor 28-80mm which I didn't actually end up testing because it has no aperture ring.
      </p>
      <p>
        I tested with lens hoods on if I had them (which applies to the Sony and the Tamron telephotos), and a filter on the Pro Automatic,
        Nikkor 25-50, and the Sony 55-210. I used aperture auto exposure mode to remove the variable of exposure settings.
      </p>
      <p>
        Here are all the images, with lens details in the captions
      </p>
      {gallery(images)}
      <p>
        Here are my impressions so far:
      </p>
      <h2>Sony E 16-50mm PZ OSS</h2>
      <p>
        Some obvious distortion at 16mm, as expected, but overall actually kinda decent. Wide open there is a little bit of softness,
        but it's not bad. I suspect lens comp is doing its job...
      </p>
      <h2>Nikkor 25-50mm f4 AI-S</h2>
      <p>
        Decently sharp at all apertures, but some chromatic aberrations and fringing at wider apertures and narrower zooms. Nice colors overall.
      </p>
      <h2>Tamron 28-200mm LD Aspherical IF</h2>
      <p>
        A pretty garbage lens, but to be fair, I did get it for free. Noticeably soft wide-open, and not the attractive kind of soft. 
        Stopped down to f8, it gets a little sharper, but it's still not great. Narrower zooms do better than wider zooms at hiding the softness.
        Some purple fringing wide open that mostly goes away when stopped down. Pretty unattractive bokeh, and colors seem a bit washed out.
      </p>
      <h2>Super Takumar 50mm f1.4</h2>
      <p>
        A distinct and vibey golden tint from the radioactive lens elements, that sets it apart from the rest. Very soft at f1.4, but an attractive 
        kind of softness (at least, in my opinion). It sharpens up real fast, with f4 and f8 looking similarly sharp, and there are no visible chromatic aberrations.
      </p>
      <h2>Super Takumar 135mm f1.4</h2>
      <p>
        Sharp wide-open and stopped down, though there is a tiny bit of fringing at f3.5, barely noticeable. This goes away at f8.
      </p>
      <h2>Pro Automatic 90-230mm f4.5</h2>
      <p>
        Also not great. Slightly better than the Tamron, and tbf costed only $15. Slightly soft at f4.5, but way better than the Tamron. Unattractive bokeh,
        and there is visible CA that goes away when stopped down. Some vignetting especially at narrow zooms, that goes away when stopped down. Slightly warm colors.
      </p>
      <h2>Sony E 55-210mm f4.5-6.3 OSS</h2>
      <p>
        Just a great lens, really. Realistic colors, similarly sharp wide open and stopped down, and no visible CA. Bokeh is unremarkable. There is some ever so slight vignetting at narrower zooms 
        that goes away when stopped down.
      </p>
    </Layout>

  )
}
