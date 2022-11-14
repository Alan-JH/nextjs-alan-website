import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import "react-image-lightbox/style.css";
import {galleriesHeader} from '../../components/gallery-elements'

export default function FirstPost() {

  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Alan's Photography</title>
      </Head>
      <h1>Photography</h1>

      <h2><center> Galleries </center></h2>
      {galleriesHeader()}
      
      <h2>Gear</h2>
      <img
      src = {"/photography/cameras.jpg"}
      alt = {"/photography/cameras.jpg"}
      layout='fill'
      objectFit='contain'
      loading="lazy"
      />

      I mainly shoot with a Sony A6000 APS-C body, and I have started to shoot 35mm film with a Pentax ME Super. I sometimes do post processing in Darktable. 
      I am a bit of a vintage lens collector now, and I have M42 adapters for both my Pentax ME Super and my Sony A6000, so I can use my vintage lenses on either camera. 
      The manual focus and aperture ring are very fun to use, and I usually use M42 primes for walk around shots with my A6000. 
      I fell in love with M42 after a Simon's Utak video, and it really is a great way to get a cheap selection of focal lengths.
      
      <h3>E Mount Lenses</h3>
      <h4>Sony E 55-210mm f4.5-6.3 OSS</h4>
      A good telephoto lens that I use for plane spotting and the occasional moon shot. Not very fast, but cheapish and gets nice shots. 
      There is an 18-200mm Tamron lens that costs a little more, and if I had known at the time, I would have gotten that for the wider focal length range, but what's done is done.

      <h4>Sony E 16-50mm f3.5-5.6 OSS</h4>
      The kit lens that came with the A6000. Feels cheap and made of plastic, but otherwise a decent lens. Has power zoom, a fast autofocus, and a nice focal length range. 
      I only really use it for astro photography anymore because of the stabilization

      <h3>M42 Vintage Lenses</h3>
      <h4>Super Takumar 50mm f1.4 (7 element version)</h4>
      My absolute favorite lens, a great fast fifty that is built like a tank, and gets awesome bokeh shots. 
      As it is the seven element version, the glass is baked with thorium, which makes it radioactive, but the dose is very low and probably won't kill me, anyways. 
      The radioactive glass gives images a nice golden tint. Highly recommend grabbing one, or an SMC Takumar, if your camera can support an M42 adapter.

      <h4>Soligor Wide-Auto 35mm f2.8</h4>
      Another good walk around prime lens, that I picked up at a camera store for $30. Not quite as fast as the Takumar, but faster than the Sony kit lens. 
      Also built like a tank, and the glass does not seem to be radioactive, as it does not have any noticeable tint.
      
      <h4>Pro Automatic 75-230mm f4.5</h4>
      An absolute monster of a telephoto lens, weighing in at 900 grams, found on the bargain shelf of the camera store with no price tag. 
      I got this one mainly as a joke, but it is actually a great telephoto considering the $15 I spent on it, and I have used it a couple times on my Pentax. 
      It is technically faster than my E mount telephoto, but I don't think that is worth the weight expense...
      <img
      src = {"/photography/telephoto.jpg"}
      alt = {"/photography/telephoto.jpg"}
      layout='fill'
      objectFit='contain'
      loading="lazy"
      />
      If I'm not careful, I might snap my E mount right off

    </Layout>

  )
}

