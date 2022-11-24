import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const images = [
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEV7xsQEwBuu7vSoq68_hIsUGPxvf8OLgjFlfqOvsxsANa8UhTgQEXHxBhI0v2zS2SrlF3arq0VsqdUQt5UUEvX3iprXlhLIU3HS_z7wRxrBpcs9lZU3E5jR35S0LCocg9pwTEYdE26HaH4YywO81YYJ=w1463-h975-no?authuser=0", "1.jpg", 1462, 975, "9 Sep 2022 | Sony E 55-210 f4.5-6.3 OSS (@210mm) | Moon shot"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEX9yWsznFfHiKhW_xd4wIuabdx50pfxiMHnohMZvOGx9B5QbDqOhuvgTe9NkzGLEVkRlAxgOXs0ts1TfPeXb75ov40KSScVTh2zzb73Fr6TJPDTZCf5wvVaRrMxNPiQzBXzBzWqmcH1ilR_n6ztpHz3=w1463-h975-no?authuser=0", "2.jpg", 1462, 975, "27 Oct 2022 | Soligor Wide-Auto 35mm f2.8"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEUhh1e5Y4HcKQajGrO7meDaHznLm-VN7OBnJpGfV70ZFKdFICanL2EaMv2RdPgSRV3pIsTqkFVo-2c-ZDpIMgLgITssJw-upRD8UmVEyRQy5lX4PyevP8IZkkpKPkSyygQjOaun3XtxCG6bup_J_owd=w1463-h975-no?authuser=0", "3.jpg", 1462, 975, "27 Oct 2022 | Soligor Wide-Auto 35mm f2.8"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEVy0-3nL31eAeKq-rYF4Iqtjv7OwGg4kxI9xBBwuiax0ttJjKB4W9cd3JpIRrGdg271OCrHktURCX78ZV_SogN45zxB01ORQD57JOyZ4gXWBn9VpG_Wv6RoQXew_kJNqVmjMEFzGFIlJhZktDdV0uPx=w1463-h975-no?authuser=0", "4.jpg", 1462, 975, "27 Oct 2022 | Soligor Wide-Auto 35mm f2.8"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEX-CpcDR05OppBicFVzcIOmvb9pQ9ykCM4XQ0WgoFfFYKqHe3Sq2cQQKRTFyk6M6RkazrpmNh96398PlFXEMJ_l4GI9ejwFM4OODMS-eHXQLJ3KLOigY5ZFaBaFTJUass7UbojTDbdz2kIxfQ-DjbYX=w1463-h975-no?authuser=0", "5.jpg", 1462, 975, "27 Oct 2022 | Soligor Wide-Auto 35mm f2.8"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEVRZTj5_ezTUtNHqBqJr8iGZa9WSc4gUs8h1n4GzZeVMw4Llzl_sZ7dxT9FJFkwS05RVN_iWMloXcpyDNCT4jZWli2uqnP4-BvnVYbRtpVGZ7iqpaZj-4WniqGXSfSTTgFgkT4EW-IYuTPWfBqZtZ6H=w1463-h975-no?authuser=0", "6.jpg", 1462, 975, "27 Oct 2022 | Soligor Wide-Auto 35mm f2.8"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEUc4o-VxLRTlTNGlNyq1n64YEEBGkffuqRE_fuLCaloK4rcanWIR6086kbD1ZztJ-Ojkn7GPIlcBxS10n-HAMzRbLCnCg02pAeixV0ExrvTP1p1j8iDsWMHJLW7DhrmfmRslwG0vpqozE0rtSq4zonA=w1463-h975-no?authuser=0", "7.jpg", 1462, 975, "27 Oct 2022 | Soligor Wide-Auto 35mm f2.8 | Under a streetlamp"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEXusKVyOqkri5aO1wkpDAc8ldwn1FRsXvjb39VhC3_YqS90C5RYMeaETwuP53gBxftFXwAOB9lI95yr8V6kDwoUU7gDP0DuQH1-B_rIo_GiWbLZyK9jcTJQQuGnjN_nq894bEXA95HT9e8EYiEAfz1J=w1460-h975-no?authuser=0", "8.jpg", 1460, 975, "27 Oct 2022 | Sony E 16-50 f3.5-5.6 PZ OSS (@19mm)"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEXJvUB7cg3QLuZZCyX_cl4ut6iPP-jYQ4arJ79qxYdJZM8AQZrE1kVdlvqM25GpmuWRTircvqLSMJrcz3CPe5_b0NJmGvKtsOCeNi9nmva5nf0zRg2ZD9YJYBXu3F6wrMrcrH_mxcwUQQsCk2-k9kjm=w1463-h975-no?authuser=0", "9.jpg", 1462, 975, "29 Oct 2022 | Sony E 55-210 f4.5-6.3 OSS (@210mm) | Moon shot at Reagan"),
  image("photography/astro", "https://lh3.googleusercontent.com/pw/AL9nZEVF-E4eIlrGXIrzJ_8RT1LaNah_rJXvonbzUaL1DtPS8SsLrQlQQjg0JNcizzvxWC7FYjGIPDsf8qd2gwiXlVOAulBaf66LHx2NTAwExgz--QynKaY2eZ_5zmxOa88_Q5EuuqNqU_Sh2ExZiJkG8LjF5A=w1463-h975-no?authuser=0", "10.jpg", 1462, 975, "19 Nov 2022 | Super Takumar 50mm f1.4 | Second attempt at astro didn't go too well"),  
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

      Last updated 24 November 2022

    </Layout>

  )
}

