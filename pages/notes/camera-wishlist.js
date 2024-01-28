import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, img_photo_descrip_block_h2 } from '../../components/img_blocks'
import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Camera Wishlist"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/notesheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      A bunch of cameras I really want

      <h1>35mm</h1>

      Most of these are nikon. Im kinda a nikon fanboy

      <h2>Nikon F2AS</h2>
      <p>
      Like most late 70's photographers, I am obsessed with the mechanical sturdiness of the F2. The AS variant (1977-1980) had the finder with the most 
      sensitive meter ever produced by Nikon (capable of down to -4EV at 100 ISO). Definitely worth lugging around for night photography.
      </p>
      
      <h2>Nikon FM3a</h2>
      <p>
      Because who wouldn't want an 8s-1/4000 capable shutter with ability to switch between fully mechanical and fully electronic shutter, needle light meter, 
      and repair support from Nikon? Costs about as much as a low end digital though...
      </p>

      <h2>Olympus Pen-F (The '60s film SLR, not the modern mirrorless)</h2>
      <p>
      I just want a half frame SLR, as impractical as owning olympus pen lenses would be.
      </p>

      <h2>Pentax Spotmatic (SP, SP1000, SP500, whatever)</h2>
      <p>
      One of the first SLRs with TTL metering, M42 mount, pretty nice looking. Probably a pain to actually use though, and not durable.
      </p>

      <h2>Nikon F4</h2>
      <p>
      Just wanna own the most innovative Nikon SLR ever, even if I'd never really use it (more of a manual guy myself)
      </p>

      <h3>Nikon NASA F4</h3>
      <p>
      No chance of actually getting one of these, but one of the first and rarest digital cameras, flown by NASA on the space shuttle
      </p>

      <h2>Nikon F6</h2>
      <p>
      Modern ergonomics and AF/AE on a film camera? Count me in!
      </p>

      <h2>Olympus OM-10</h2>
      <p>
      Another super advanced 70s era SLR.
      </p>

      <h2>Nikon F3 Variants</h2>
      <p>
      I love the F3 so much I'm obsessed with the variants of it
      </p>

      <h3>Nikon F3AF</h3>
      <p>
      Autofocus variant of the F3 released in 1983, which didn't even support screw drive mechanisms so needed to be used with (at the time) 
      two available AF lenses with builtin motor drive, weird mashups of an AI-S lens with AF motor before AF-D lenses had been released.
      </p>

      <h3>MD4 Motor Drive + MF2 750 frame bulk load back</h3>
      <p>
      For when I need to be a 1980s action photographer, I suppose. Seriously, who wouldn't want this thing at least as a shelf decoration?
      </p>

      <h3>DA-2 Action Finder</h3>
      <p>
      Pretty funny looking, and probably really cool to have such a large finder
      </p>

      <h1>Medium Format</h1>

      <h2>Mamiya Press 23</h2>
      <p>
      Goofy looking rangefinder style 120/220 camera with interchangeable backs.
      </p>

      <h2>Hasselblad 500CM</h2>
      <p>
      …Obviously. How could anyone not want such a compact 6x6?
      </p>

      <h2>Pentax 6x7</h2>
      <p>
      Just obsessed with the idea of a scaled up 35mm SLR as a MF camera
      </p>

      <h2>Seagull TLR of any sort</h2>
      <p>
      I want my own awful chinese photography equipment!
      </p>

      <h1>Digital</h1>

      <h2>Olympus EM1 Mk II or III</h2>
      <p>
      Most ergonomic grip ever, plus insane MFT stabilization
      </p>

      <h1>Lenses</h1>

      <h2>Nikkor 50mm f1.2</h2>
      <p>
      Not much of a lens guy, my 50mm f1.4 and 85mm f2 AI-S Nikkors are what I use for almost everything, plus a little bit of 25-50mm f4 AI-S. 
      However, I'd love to have a 50mm f1.2 on hand for even faster AI-S.
      </p>

      <br></br>
      <Link href="/notes">
        <a>Back to notes</a>
      </Link>
      <br></br>

    </Layout>

  )
}
