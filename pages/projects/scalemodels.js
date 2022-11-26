import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block, double_img_photo_descrip_block, triple_img_photo_descrip_block} from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "Scale Models"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/projects/projects-landing">
        <a>Back to projects</a>
      </Link>
      <br></br>

      From seventh grade until the start of sophomore year at TJ, I built all sorts of scale models and dioramas, from 1:16 Guillows stick and tissue, to 1:35 armor to 1:72 plastic aircraft.
      <br></br>
      <br></br>
      Here are my models:
      <br></br>
      {img_photo_descrip_block("Guillows 1:16 Spitfire", "This was my first model, a balsa stick and tissue with a wind up propeller. I had the kit sitting around for a few years, and I only started building it when a storm knocked out power for a weekend, and I had nothing else to do. Ran from March to April 2018", "/images/models/spitfire.jpg")}
      {img_photo_descrip_block("Guillows 1:16 BF-109", "My second model, another balsa stick and tissue, and this one had an option for longer wings for better flight that I chose not to use. Ran from April to June 2018", "/images/models/bf109.jpg")}
      {img_photo_descrip_block("Testor 1:35 M4A3 Sherman", "My first armor model, but not exactly a full kit. It ended up being a test bed for weathering techniques", "/images/models/m4a3.jpg")}
      {double_img_photo_descrip_block("Zvezda 1:35 T-34-85", "This was my first proper armor model. I tried more weathering techniques on it, but didn't give it an acrylic paint coat because I figured the plastic was already colored correctly... This lead to white spots on the front from oil paint thinner", "/images/models/t3485-1.jpg", "/images/models/t3485-2.jpg")}
      {double_img_photo_descrip_block("Tamiya 1:35 M4A3E8 Easy Eight", "The first time I got almost everything right, from start to finish. I painted with acrylic, assembled, applied decals, and weathered. The only thing I missed was going over the whole thing with a matte varnish again after doing decals, and as a result you can see the gloss varnish spots underneath the decals.", "/images/models/m4a3e8-1.jpg", "/images/models/m4a3e8-2.jpg")}
      {triple_img_photo_descrip_block("Tamiya 1:35 M10", "Another solid model kit, with an open top, and gunner, loader, and commander figurines. It was really fun to paint the detail in the internals.", "/images/models/m10-1.jpg", "/images/models/m10-2.jpg", "/images/models/m10-3.jpg")}
      {double_img_photo_descrip_block("Tamiya 1:35 Challenger 2", "One of my favorites. I bought this one at the Tank Museum in eighth grade, and it is a VERY detailed kit. The loader even has a little 1:35 scale water bottle to hold. Also my first diorama (The Easy Eight diorama at first didn't have a base)", "/images/models/challenger2-1.jpg", "/images/models/challenger2-2.jpg")}
      {triple_img_photo_descrip_block("Tamiya 1:35 Sd.Kfz 302 Goliath", "This one's a pretty unique kit. The goliath was a tracked mine made by the Germans in WWII, and so the kit is much smaller than a tank. I cut a brick pattern into foam for the street diorama, and painting detail on the figures is always fun, especially with Tamiya", "/images/models/goliath-1.jpg", "/images/models/goliath-2.jpg", "/images/models/goliath-3.jpg")}
      {double_img_photo_descrip_block("Tamiya 1:35 Pz. VI Tiger", "Also purchased at the Tank Museum, this was the last model I made before freshman year at TJ, so I rushed towards the end and never got to weathering it. Painting the rubber rims into the roadwheels took absolutely forever, and I don't think I will do another German big cat in the near future.", "/images/models/tiger-1.jpg", "/images/models/tiger-2.jpg")}
      {triple_img_photo_descrip_block("Revell 1:72 F/A-18C Hornet", "After freshman year, I had a lot of time over the summer, so I decided to get back into scale models, this time with the plane that I had been flying in DCS World. This was the first kit since the Zvezda that wasn't Tamiya quality. It wasn't too detailed, and the parts took some sanding to fit together smoothly. I also had to cut into the wing parts to put the flaps down, and bought a separate kit for a pilot figure. But overall it was a blast, and I am super proud of the carrier landing diorama.", "/images/models/hornet-1.jpg", "/images/models/hornet-2.jpg", "/images/models/hornet-3.jpg")}
      {triple_img_photo_descrip_block("Tamiya 1:72 F-16CJ Bl.50 Viper", "Immediately after the Hornet, I wanted to do another, and I also wanted to go back to Tamiya quality, so I picked out the Tamiya F-16. The kit had a much more complete wild weasels loadout than the Revell, and I made a diorama of a fox-3 shoot with cotton, some 2mm steel rods, and a 3D printed base. The only thing I wish I had done differently was using a satin varnish instead of gloss, because it's a little unrealistically shiny. This model has the honor of sitting atop my PC.", "/images/models/viper-1.jpg", "/images/models/viper-2.jpg", "/images/models/viper-3.jpg")}
      <p>
        Last updated 17 Nov 2022
      </p>
    </Layout>

  )
}
