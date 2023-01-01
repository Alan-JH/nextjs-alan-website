import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import "react-image-lightbox/style.css";
import {galleriesHeader} from '../components/gallery-elements'

export default function FirstPost() {

  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Photography</title>
      </Head>

      <h2><center> Galleries </center></h2>
      {galleriesHeader()}

      <p>
        I do both film and digital photography, and they both have their merits, but film is definitely a favorite right now, even though it is ridiculously 
        expensive. Film just calls for much more attention to each shot and gives you a much more interesting result than digital, and every step of the process 
        is more deliberate and personal.
      </p>
      
      <h2>Gear</h2>
      <p>
      I have quite a collection of equipment (mostly thanks to my grandparents handing down their old stuff) but I haven't had a chance to use most of it, so 
      I'll only include the notable ones here.
      </p>
      <img
      src = "/photography/bodies.jpg"
      layout='fill'
      objectFit='contain'
      loading="lazy"
      />
      <h3>Bodies</h3>
      <h4>Sony a6000</h4>
      This is my main and only digital camera (though I have experimented with my dad's Nikon D3200 before). It is a mirrorless APS-C body camera with a 24MP sensor.
      I chose this body because it's dense; fairly lightweight but very small. It's very easy to carry around, but the ergonomics could be better, especially with the buttons on the back.
      I use an M42 to E mount adapter to use vintage prime lenses, and I plan to get a Nikon F to E mount to use F mount lenses.

      <h4>Pentax ME Super</h4>
      This is my main film camera, and I absolutely love it. It ended its production run in 1984, and despite costing $40, it is built like a tank. It has a metal body, and an 
      extremely satisfying film advance lever and shutter sound. The through the lens metering is decent, but does require some thought for backlit or bright subjects. 
      I use it with an M42 to Pentax K mount adapter permanently installed, since most of my vintage lenses are in M42. 

      <h4>Olympus Pen EE3</h4>
      My 1960's half frame point and shoot. I bought this with the idea of shooting paired shots, since full frame 35mm scanners will scan two half frame shots per image. Its a very neat little
      camera, with a completely analog light meter that doesn't use any batteries, and adjusts exposure by changing aperture. 
      The focus is fixed at 12 feet and it relies on depth of field for keeping objects in focus, which is an elegant solution, but does result in some out of focus subjects especially in low light. 
      Working within the constraints of this camera has been really fun, and I have been taking it with me pretty much everywhere.

      <h4>Nikon F50D</h4>
      My grandfather bought this in Tokyo in 1997, and gave it to me along with a Tamron 18-200mm aspherical lens when he heard I was starting to shoot film. 
      It's pretty bulky and plasticy, so you probably won't see me out with this camera that often. The auto advance and auto rewind are convenient, though.

      <h4>Agfa Karat 36</h4>
      A 1930's era 35mm camera that my grandfather had, with no electronics whatsoever. The aperture, shutter speed, and focus are all set by rings on the lens, and the shutter needs
      to be cocked with a lever on the lens. The lens deploys out with an accordion mechanism. Since this was before the 135 standard existed, I had to modify it with a 3D printed
      takeup spool and film winding handle to be able to use it with 135 standard film cartridges. I don't tend to go out with this that often since its so cumbersome to use, 
      but it is just really cool for the antique value.

      <h4>Toma M900</h4>
      One of my grandfather's early 2000's era point and shoots, with a fixed shutter and aperture. It just relies on flash to get a properly exposed shot, which is absolutely chad. 
      Basically just a shitpost camera, like a polariod with the obnoxious flash. 

      <h4>Yashica FX-7</h4>
      Another one of my grandfather's cameras, in the classic '70s or '80s style. It's similar to the ME Super, except it has a plastic film advance and film rewind, and no auto mode.
      The viewfinder is pretty dim, and the exposure meter is difficult to read.
      The one thing this camera has over the Pentax is the absolutely sexy shutter sound, a click followed by reverb. 
      
      <h3>Lenses</h3>
      <h4>Sony E 55-210mm f4.5-6.3 OSS</h4>
      A good telephoto lens that I use for plane spotting and the occasional moon shot. There is some vignetting noticeable especially at higher zooms, but it is solid overall. 
      There is an 18-200mm Tamron lens that costs a little more, and if I had known at the time, I would have gotten that for the wider focal length range.

      <h4>7Artisans 7.5mm f2.8 Fisheye (Sony E Mount)</h4>
      A very unique fisheye lens with 190 degree field of view. I've had some fun experimenting with it, but I don't use it too often.

      <h4>Sony E 16-50mm F3.5-5.6 PZ OSS</h4>
      The kit lens that came with the A6000. Honestly pretty garbage, but I still use it for astro for the stabilization and wide angle range. I plan to replace it with a Nikkor 25-50mm
      f4 with an adapter.

      <h4>Super Takumar 50mm f1.4 in M42 (7 element version)</h4>
      My absolute favorite lens, a great fast fifty that is built like a tank, and gets awesome bokeh shots.
      As it is the seven element version, the glass is baked with thorium, which makes it radioactive, but the dose is very low and probably won't kill me, anyways. 
      The radioactive glass gives images a nice golden tint. 
      Shots can be sharp stop down or have a nice soft effect wide open. 
      This lens is basically the embodiment of film photography in a lens, with the slight unpredictability of the shots, and the
      interesting effects that you get. If you take landscape wide-open for example, you sometimes get sharp images, and other times get a dreamy effect, and it's very hard to tell which will happen.
      Highly recommend grabbing one, or an SMC Takumar, if your camera can support an M42 adapter.

      <h4>Super Takumar 135mm f3.5</h4>
      Similarly built to the 50mm f1.4, but a zoom prime lens. It's a solid, sharp lens, without any tint or strange effects. I have used it for interesting walkaround photography, but I mainly use it whenever
      I need a lightweight telephoto-ish on my Pentax.

      <h4>Pro Automatic 90-230mm f4.5</h4>
      An absolute monster of a telephoto zoom lens, weighing in at 900 grams, found on the bargain shelf of the camera store with no price tag. 
      I got this one mainly as a joke, but it is actually a great telephoto considering the $15 I spent on it, and I have used it a couple times on my Pentax. 

      <h4>Tamron AF28-200mm f3.8-5.6 LD Aspherical IF Super</h4>
      Given to me with the F50D by my grandfather.
      The most convenient focal length range that I currently own. There is some noticeable distortion at the wider and narrower zoom settings, and the lens itself feels cheap, 
      but I do appreciate the range and the compact form factor of the lens considering the focal length.

      <h3>Misc. Gear</h3>
      <h4>Editing Software</h4>
      I started out editing in darktable, which is a linux compatible editing software with a lot of built in functions. Lately, I have been using Photoshop more and more, because I'm
      a sucker for the UI and layer system. I also use Photoshop for film scanning

      <h4>Peak Design Capture</h4>
      I have a Peak Design clip on my backpack, and capture plates for the bodies that I use the most often. It's an awesome system, designed and manufactured thoughtfully. Being able to clip a camera to my
      backpack strap is a lot more convenient that having to use a shoulder strap while carrying my backpack, and there's the added bonus of being able to show off my camera front and center :) Another neat thing
      with the capture plates is that you can clip a shoulder strap to the plate (which mounts to the bottom of the camera) instead of the anchors on the front or sides towards the top of the camera, and this 
      allows the camera to hang with the lens down instead of out to the side, making it much more conveneint with long lenses.

      <h4>Lens Caps</h4>
      I 3D print my own rear lens caps and camera body caps, so I don't need to buy them

      <h3>Pipe Dream</h3>
      Right now the dream camera is the Nikon F3, but I would also love to experiment with 120 format

    </Layout>

  )
}

