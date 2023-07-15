import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import "react-image-lightbox/style.css";
import {daytodayList} from "./photos/daytoday"
import {dcList} from "./photos/dc"
import {caliList} from "./photos/cali22"
import {floridaList} from "./photos/florida22"
import {rockiesList} from "./photos/rockies"
import {skiingList} from "./photos/skiing"
import {planesList} from "./photos/planes"
import {astroList} from "./photos/astro"
import {macroList} from "./photos/macro"
import {nightList} from "./photos/night"
import {vintageList} from "./photos/vintage"
import {ocList} from "./photos/oceancity"
import {sfList} from "./photos/sf23"

export default function FirstPost() {

  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Photography</title>
      </Head>

      <br></br>

      <p>
        I do both film and digital photography, and they both have their merits, but film is definitely a favorite right now, even though it is ridiculously 
        expensive. Film just calls for much more attention to each shot and gives you a much more interesting result than digital, and every step of the process 
        is more deliberate and personal.
      </p>

      <h2>
        Collections
      </h2>
      {daytodayList()}
      {sfList()}
      {dcList()}
      {ocList()}
      {caliList()}
      {floridaList()}
      {rockiesList()}
      {skiingList()}
      {planesList()}
      {astroList()}
      {macroList()}
      {nightList()}
      {vintageList()}

      <h2>Gear</h2>
      <img
      src = "/photography/bodies.jpg"
      layout='fill'
      objectFit='contain'
      loading="lazy"
      />
      <h4>Sony a6000</h4>
      This is my main and only digital camera. It is a mirrorless APS-C body camera with a 24MP sensor.
      I chose this body because it's dense; fairly lightweight but very small. It's very easy to carry around, but the ergonomics could be better, especially with the buttons on the back.
      I use an M42 to E mount adapter to use vintage prime lenses, and an F to E mount for Nikkor glass. My two native E mount lenses are the Sony 55-210mm f4.5-6.3 and the 7artisans 7.5mm f2.8 fisheye.

      <h4>Nikon F3HP</h4>
      My main camera, and Nikon's flagship SLR from when it was introduced in 1980 to when the auto-advance/autofocus F4 was released in 1988. It has an incredibly satisfying film advance lever, fractional exposure compensation stops,
      a linear shutter auto mode along with bulb and "T" mode (where the shutter remains open from when shutter release is pressed until you switch out of the mode), swappable viewfinder 
      (with a high eyepoint making it easier to use with glasses on), and a double exposure lever for in camera double exposures. The 80/20 metering system took a while to get used to, as it's less forgiving
      than 60/40, and the camera is quite heavy, at 600g for the body alone. I love the ADR scale, which shows the current lens aperture by optically showing the current marking on the lens through the viewfinder. 
      It's creative engineering on Nikon's part. 
      <br></br>
      I mostly switch between the Nikkor 50mm f1.4 AI-S and the Nikkor AF-D 24-120mm f3.5-5.6, but I sometimes use a 25-50mm f4 AI-S for sharper wide shots and smoother zoom ring than the 24-120.
      The fast fifty handles so so nicely, and the 24-120 provides an extremely convenient range of focal lengths while sacrificng a bit on sharpness.
    

      <h4>Pentax ME Super</h4>
      This was my first film camera, and it's still a lot of fun to use. It costed only $40 with no lens, and I installed an M42 to PK adapter to use vintage M42 lenses.
      It's a pretty good mid-70's/80's manual SLR, with a bright viewfinder, 60/40 metering, shutter auto mode, 1/125 sync speed, bulb mode, and exposure comp (in whole steps).
      I generally use my F3 more because I have proper zoom lenses for it, but the ME Super is still a fun little camera and I'm more willing to take it on risky adventures like biking.
      <br></br>
      I usually switch between an M42 50mm f1.4 Super Takumar 7 element and an M42 135mm f3.5 Super Takumar. I also have a 135mm f2.8 Auto Lentar with Tamron T4 mount to M42, which I bought for a dollar
      and fixed up. The 50 Takumar is a fun lens that gives a golden tint because of its radioactive glass, and I also use it to get more interesting film like photos on my a6000. All the M42 lenses are built
      extremely well.

      <h4>Olympus Pen EE3</h4>
      My '60's half frame point and shoot. Its a neat little camera, with a completely analog light meter that doesn't use any batteries, and adjusts exposure by changing aperture. 
      The half frame format also lets me take 72 shots on a 36 exposure roll, but holding the camera horizontally takes portrait images.
      The focus is fixed at 12 feet and it relies on depth of field for keeping objects in focus, which is an elegant solution, but does result in some out of focus subjects in low light. 
      Once you understand the limitations and how to use use the camera, it can take some really nice shots. It's the best point and shoot I have used, and I keep it in my backpack side pocket just 
      in case I come across an aesthetic shot. 

      <h4>Nikon F50D</h4>
      My grandfather bought this in Tokyo in 1997, and gave it to me along with a Tamron 18-200mm aspherical lens when he heard I was starting to shoot film. 
      It's pretty bulky and plasticy, so you probably won't see me out with this camera that often. The auto advance and auto rewind are convenient, though.

      <h4>Agfa Karat 36</h4>
      A 1930's era 35mm camera that my grandfather had, with no electronics whatsoever. The aperture, shutter speed, and focus are all set by rings on the lens, and the shutter needs
      to be cocked with a lever on the lens. The lens deploys out with an accordion mechanism. Since this was before the 135 standard existed, I had to modify it with a 3D printed
      takeup spool and film winding handle to be able to use it with 135 standard film cartridges. I don't tend to go out with this since its so cumbersome to use, 
      but it is just really cool for the antique value.

      <h4>Toma M900</h4>
      One of my grandfather's early 2000's era point and shoots, with a fixed shutter and aperture. It seems to focus at about a meter in front of the camera, but uses aperture for depth of field.
      Throughout winter of '22-'23 I brought it with me skiing since it's one of the two cameras I really wouldn't mind breaking. It did take some pretty good shots, but the focus is an issue for landscape photos.

    </Layout>

  )
}

