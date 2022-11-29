import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import "react-image-lightbox/style.css";
import {galleriesHeader} from '../../components/gallery-elements'
import Image from 'next/image'

export default function FirstPost() {

  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Photography</title>
      </Head>

      <h2><center> Galleries </center></h2>
      {galleriesHeader()}

      <p>
        I do both film and digital photography, and they both have their pros and cons. I started on digital, and it is good for filler. You can snap away without much cost, 
        and see the results instantly. It really allows you to experiment, and is much better for action shots and astro.
        On the other hand, I have been appreciating film more and more, the more I use it. You pay $10-15 for 36 shots (plus another $10 to develop the roll), no take-backs. If you screw one up, 
        you can't go back and redo it. This forces you to take more time to consider what you are taking a picture of. Every time I consider taking a shot I think about whether I might find 
        a better shot later, and every time I take a shot I stop for maybe 10-15 seconds to make sure everything is right--the composition is good, the lighting is good, the meter is working, 
        and the image is level. I press the shutter, and breathe a sigh of relief, satisfaction, and anxiety that it might not come out as well as I hope. This kind of care and this rush of
        emotions just isn't present with digital. This is also the reason I prefer manual film advance over auto advance. It feels much more satisfying, and I don't need, or want, to shoot 
        continuous with film anyways.
      </p>
      <p>
        Another difference between film and digital is the artistic touch. Taking photos with artistic vision is possible with both digital and film, but the thought is very different. With
        digital, you are often aiming for the sharpest and most realistic possible shot, and you rely on post processing or the pure composition to introduce creativity. That's not to say you can't add dreaminess
        or visual effects at the shot level--I use a Takumar prime lens specifically to get a film-like look--but the general idea with digital is to maximize the sharpness and realism, with expensive
        digital lenses minimizing distortion, tint, vignetting, abberations, and dreaminess. Meanwhile with film, the color is simply unmatched by unedited digital, and there is a certain 
        unpredictability that gives photos personality. Imperfections are something that people actually pursue with film. For example, people 
        seek out film ISOs in the thousands specifically to get that film grain, but if you set your digital camera ISO to those settings, you just get ugly images.
      </p>

      <p>
        Overall, digital is great for quantity and experimenting with different views, and for taking images with a sharp aesthetic, but film simply beats it in terms of personality.
        Nothing is cooler than the feeling of going to the camera store and getting your film scans back of the film photos that you had been taking for the last week, or month. 
        Nothing is more satisfying than the click and ping of that mechanical shutter, when you take the shot that you scoped out and paused for half a minute to perfect, knowing that you won't be able 
        to see how it turned out for at least another few days.
      </p>

      
      <h2>Gear</h2>
      <img
      src = "/photography/cameras.jpg"
      layout='fill'
      objectFit='contain'
      loading="lazy"
      />
      <h3>Bodies</h3>
      <h4>Sony a6000</h4>
      This is my main and only digital camera (though I have experimented with my dad's Nikon D3200 before). It is a mirrorless APS-C body camera with a 6000x4000 sensor resolution.
      I chose this body because it's dense; fairly lightweight but very small. It's very easy to carry around, but the ergonomics could be better, especially with the buttons on the back.
      Another nice thing about mirrorless is that there are adapters to most other SLR lens mounts without having to use glass elements to correct for focus. This is the camera that you will
      likely see me walking around with.

      <h4>Pentax ME Super</h4>
      This was my first film camera, and I absolutely love it. It ended its production run in 1984, and despite being cheap, it is still built like a tank. It has a metal body, and an 
      extremely satisfying film advance lever. The through the lens metering does the job, and the split focus screen comes in very handy. I use it with an M42 to Pentax K mount adapter 
      permanently installed, since most of my vintage lenses are in M42. My only gripe is that the manual shutter speed adjustment buttons are placed rather inconveniently, and if I shoot
      manual (which is rare, anyways), I often have to take my eye off the viewfinder to look for them.

      <h4>Nikon F50D</h4>
      My grandfather bought this in Tokyo in 1997, and gave it to me along with a Tamron 18-200mm aspherical lens when he heard I was starting to shoot film. It's not an amazing camera; it
      was designed as an entry level body at a time when plastic was just starting to be used, so it feels pretty cheap, almost like a toy. Despite that, it's got some heft to it, though it's
      not as dense as I would like it to be. The grip ergonomics are alright, but the buttons are placed poorly, with the four buttons for adjusting shutter and aperture placed in a row, so you
      have to try all of them to see what changes what. The auto-advance isn't too noisy, but it's definitely there. The auto-rewind is convenient, though. You probably won't see me out with
      this camera that often.

      <h4>Canon Sure-Shot Zoom Max</h4>
      Another camera my grandfather had. It's a point and shoot that is noisy, cheap, and plastic, but maybe I'll use it somewhere...

      <h4>Other</h4>
      My grandfather on the other side of the family had a bunch of film cameras, and they were left to my grandmother when he passed away. These included a Yashica FX-7, Yashica 109, Nikon N65,
      Toma M-900 point and shoot, and an ancient Afga Karat from before SLRs were a thing. I haven't had a chance to take test shots with each of these yet, but they seem very cool. The Afga was last produced
      in the 1950s and is fully mechanical with no built in light meter. The FX-7 is a typical '70s or '80s SLR, with through the lens metering but no auto mode. The shutter is completely mechanical and there
      is a bulb function, which is nice. The 109 is another loud '90s era auto advance camera, but I think I prefer it over the F50 because it embodies the '90s aesthetic and doesn't try to look professional.
      The only issue is that no one uses Yashica mount. I haven't gotten the batteries to get the Nikon N65 working, and I honestly don't really intend to anytime soon. The Toma M900 seems to be broken.

      <h3>Sony E-Mount Lenses</h3>
      <h4>Sony E 55-210mm f4.5-6.3 OSS</h4>
      A good telephoto lens that I use for plane spotting and the occasional moon shot. There is some vignetting noticeable especially at higher zooms, but it is solid overall. 
      There is an 18-200mm Tamron lens that costs a little more, and if I had known at the time, I would have gotten that for the wider focal length range.

      <h4>Sony E 16-50mm F3.5-5.6 PZ OSS</h4>
      The kit lens that came with the A6000. Feels cheap and made of plastic, and I suppose what you'd expect from a kit lens. It has power zoom and autofocus, which makes it the most power hungry lens
      in my collection. Otherwise, it does get decent shots, but it's pretty unremarkable. 
      I only use it for astro photography anymore because of the stabilization

      <h3>M42 Vintage Lenses</h3>
      I am a bit of a vintage lens collector now, and I have M42 adapters for both my Pentax ME Super and my Sony A6000, so I can use my vintage lenses on either camera. 
      The manual focus and aperture ring are very fun to use, and I usually use M42 primes for walk around shots with my A6000. 
      I found out about M42 from a Simon's Utak video, and it really is a great way to get a cheap selection of focal lengths.

      <h4>Super Takumar 50mm f1.4 (7 element version)</h4>
      My absolute favorite lens, a great fast fifty that is built like a tank, and gets awesome bokeh shots.
      As it is the seven element version, the glass is baked with thorium, which makes it radioactive, but the dose is very low and probably won't kill me, anyways. 
      The radioactive glass gives images a nice golden tint. 
      Shots can be sharp stop down or have a nice soft effect wide open. Wide open in broad daylight
      also exaggerates highlights, which is a cool effect to play around with. This lens is basically the embodiment of film photography in a lens, with the slight unpredictability of the shots, and the
      interesting effects that you get. If you take landscape wide-open for example, you sometimes get sharp images, and other times get a dreamy effect, and it's very hard to tell which will happen.
      Highly recommend grabbing one, or an SMC Takumar, if your camera can support an M42 adapter.

      <h4>Super Takumar 135mm f3.5</h4>
      Similarly built to the 50mm f1.4, but a zoom prime lens. It's a solid, sharp lens, without any tint or strange effects. I have used it for interesting walkaround photography, but I mainly use it whenever
      I need a lightweight zoom on my Pentax.

      <h4>Pro Automatic 90-230mm f4.5</h4>
      An absolute monster of a telephoto lens, weighing in at 900 grams, found on the bargain shelf of the camera store with no price tag. 
      I got this one mainly as a joke, but it is actually a great telephoto considering the $15 I spent on it, and I have used it a couple times on my Pentax. 
      It is technically faster than my E mount telephoto, but I don't think that is worth the weight expense...
      <center>
        <img
        src="/photography/telephoto.jpg"
        loading="lazy"
        />
        If I'm not careful, I might snap my E mount right off
      </center>

      <h3>Nikon F-Mount Lenses</h3>
      Courtesy of my grandparents, I now have a couple Nikon F-mount lenses
      <h4>Tamron AF28-200mm f3.8-5.6 LD Aspherical IF Super</h4>
      The most convenient focal length range that I currently own. There is some noticeable distortion at the wider and narrower zoom settings, and the lens itself feels cheap (like the F50), and almost 
      like a toy, but I do appreciate the range and the compact form factor of the lens considering the focal length.

      <h4>Nikon AF Nikkor 28-80mm f3.5-5.6G</h4>
      Came with the N65, but I haven't tried it yet.

      <h3>Misc. Gear</h3>
      <h4>Darktable</h4>
      When I do post processing, I use Darktable, an open source Linux compatible light table and dark room application. It handles exposure, color correction, and even astro denoising well enough for me.
      I'm honestly pretty lazy and post most of my digital photos unedited, but if there is a blatantly incorrectly exposed or noisy photo, I will edit it. I have also done a couple more artistic edits
      by playing around with color correction.

      <h4>Peak Design Capture</h4>
      I have a Peak Design clip on my backpack, and capture plates for the bodies that I use the most often. It's an awesome system, designed and manufactured thoughtfully. Being able to clip a camera to my
      backpack strap is a lot more convenient that having to use a shoulder strap while carrying my backpack, and there's the added bonus of being able to show off my camera front and center :) Another neat thing
      with the capture plates is that you can clip a shoulder strap to the plate (which mounts to the bottom of the camera) instead of the anchors on the front or sides towards the top of the camera, and this 
      allows the camera to hang with the lens down instead of out to the side, making it much more conveneint with long lenses. A word of caution though, make sure your backpack is built well enough to carry 
      your camera especially when you take it off, because the weight of the camera on my backpack's strap is starting to wear down the seams.

      <h4>Lens Caps</h4>
      I 3D print my own rear lens caps and camera body caps, so I don't need to buy them

      <h3>The Dream Setup</h3>
      I think right now my dream camera is a Nikon F3 (unsure of lens), with a wood grip and leather strap. The F3 is a beautiful camera and built like a tank (much more so than the ME Super), with manual film advance.
      I also want to try half frame film, and I have an Olympus Pen EE3 on the way to try it out. 

    </Layout>

  )
}

