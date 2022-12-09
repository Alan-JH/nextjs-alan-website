import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const images = [
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEV5h51ag4Qe2ig1PVsezF6-GcJ37JuXlZ2OCwUOgZcXPsFS1EkJo3WM0CED3KOOUuUkPJxVcJCQLWhk1f-bMtH8Gv8p4L2_ccnfTZWZtjHHVSeHjLnx5uYz2jknBPrG1sKCez65SiJZ2wbcQCore0jNOg=w1463-h975-no?authuser=0", "1.jpg", 1462, 975, "5 Dec 2022 | Super Takumar 50mm f1.4 with 25mm extension | film scanning receipt"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEX5Aj4RTMZwVc9jud-VpSfaK5-LWgbnmXR8gegLk3ReVlfpSXyjpz6YpBmJO2LmNK0pJIbdeumI7rAe-52492SEIXeSl7RftaTCIrgtJdCIMdBrj8B4MTEzIQm6EUhJI8ve00ORoFgdtENXv9LCX59odQ=w1463-h975-no?authuser=0", "2.jpg", 1462, 975, "6 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | Raspberry pi heatsink"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEXD1NqlYIENiU0JTI7PSUiKElg2BsSz87phXqdgMoxa4d5Q7D2maYpuVFgZ-SLSMdlrZXqulROzhN27jyFxj1GrY4DPH24TkndhYsJ1Et3bWc1tJPoLdseF0NCvw2jHYzERrYWrHf_L6z5_OIKfXxWNtw=w1463-h975-no?authuser=0", "3.jpg", 1462, 975, "6 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | Prusa"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEUX5e8NMO3jQlbw_N-BDfv6EKxgAWzhB4Z3UxogGVgKfWRVQbkzMOaqtamDHE4T-CedteyY4sWpu13LP-dVDttZqcUCOgVp56u-EbPL-48k0EzczSMWCmSQAvKBJEoVnGPnSqXdKSAQ1I6052WRm4mlWA=w1463-h975-no?authuser=0", "4.jpg", 1462, 975, "6 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | Prusa extruder"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEUxtH3cDI-ckX7Zk_4hXi9mJJi30rdakw0AsRLaqGorCGdGPVRni_TlmMfu5zm_0uivUURNIjUKQyUfPSQ7inuAQ3WubJ_R8NEGanCyJ27GRbNlKblUx_l4xZK8s0S_Pa8BM64NhaquL1qjwOBDSBwEWA=w1463-h975-no?authuser=0", "5.jpg", 1462, 975, "6 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | RBF tag"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEUgsYZy3jFXPm4GHocY8SKvhp6Nh8v2TwG8VI9_7b_HH_BAMWNcFBqvNyWzl3w1FmBRQtuRB9ApSogKhRvCoc9Ct13rZa7aFA7V8OkMYYrJX19adPdIErBBKneLvOCSF1hwGdmH7IHth89hOGLRdxbyKQ=w1463-h975-no?authuser=0", "6.jpg", 1462, 975, "6 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | F"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEVRNZYEIn28gcOjLwG01IpD0urXs6s_o30tl5PWaDJVIUCBBfMOvHbKxYy3h-LWsrrXcpQGWO-AlufYep8mNt54-n7h5fxnWuBarOoQwBrjYb0XwI9lpXa8J2W9M6fi0DkqhDJ7eI2d40eRVS8pbAeEjg=w1463-h975-no?authuser=0", "7.jpg", 1462, 975, "6 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | ME Super"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEUVzBHaQuQufKoOU3FQ1LgTREGZBMS6zUXOOnZdYM2jB3VXlw4dwov5kOtXOx6zpgnwoQSJoykmzTqZXE-FoETX3K9Ho6dzRmt_XDF85qOTqi7BuKsIstU1BtMG-u3kdlT90_9t9Foifiilx6Wr6l2VSw=w1999-h1336-no?authuser=0", "8.jpg", 1999, 1336, "8 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | TPS Regulator"),
  image("photography/macro", "https://lh3.googleusercontent.com/pw/AL9nZEWzigGsGWHeZpeXbRa6gcdOG_xDehNPDo9dft-ZT2dfaKk6zWsf_QDC_fck6rwG4kjwXuwNeusgSGJEVgZ0hNSUZH7CRIT5eb5rRt_ykuOe6gtkcWFkVkA3ALRWYRhsF4DL7XWsA1O8ofESTDuYkg0kmg=w2004-h1336-no?authuser=0", "9.jpg", 2004, 1336, "8 Dec 2022 | Super Takumar 50mm f1.4 with 50mm extension | Current shunt"),
  
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Macro" headertextcolor = "white">
      <Head>
        <title>Alan's Macro Shots</title>
      </Head>
      {galleriesHeader()}
      
      <p>
        I 3D printed a couple M42 extensions to be able to use my 50mm Super Tak for film scanning, but they also work pretty well for macro.
        25mm of extension is a modest 1:1.6 magnification, 50mm is 1.1:1, 75mm is 1.6:1, and 100mm is 2.1:1, but degrades the image quality very noticeably.
        Note that as you add extensions, you increase the effective aperture and amplify issues with the lens, like abberations.
      </p>

      {gallery(images)}

      Last updated 8 December 2022

    </Layout>

  )
}

