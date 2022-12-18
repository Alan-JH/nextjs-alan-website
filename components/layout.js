import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Alan Hsu'
const big_img_size = 230
const neg_margin_on_links = -2
const neg_top_margin_on_top_header = -25
const pos_margin_on_top_header = 20

export function header_links() {
  return <div style={
    {
    marginBottom: pos_margin_on_top_header,
    marginTop:    neg_top_margin_on_top_header
    }}> 
  
  &nbsp;&nbsp;

  <Link href="/" >
  <a>Home</a>
  </Link>
  
  &nbsp;&nbsp;|&nbsp;&nbsp;

  <Link href="/notes" >
  <a>Notes</a>
  </Link>

  &nbsp;&nbsp;|&nbsp;&nbsp;

  <Link href="/projects" >
  <a>Projects</a>
  </Link>

  &nbsp;&nbsp;|&nbsp;&nbsp;

  <Link href="/photos" >
  <a>Photos</a>
  </Link>

  </div>
}

export function ten_spaces() {
  return <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
}

export const siteTitle = name

export default function Layout({ children, home , layout_type, bgimage, pagetitle, headertextcolor }) {
  return (
    <div className={layout_type}>
      <header className={styles.header}>
        {home ? (
          <>
            {header_links()}

            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={big_img_size}
              width={big_img_size}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl_no_pad}>{name}</h1>

            <h3 style={{marginBottom: neg_margin_on_links}}> 
            <a href="/assets/Alan_Hsu_Resume.pdf" className="button" target="_blank">Resume</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/Alan-JH" className="button" target="_blank">Github</a>
            &nbsp;|&nbsp;
            <a href="https://www.youtube.com/channel/UC3O73QlR3EvTSLFo3HZKcKQ" className="button" target="_blank">Youtube</a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/alan--hsu" className="button" target="_blank">LinkedIn</a>
            </h3>
          </>
        ) : (
          <>
            {header_links()}
            <div className={styles.heroWrapper}>
              <div className={styles.imageWrapper}>
                <Image
                  priority
                  src={bgimage}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={bgimage}
                />
              </div>

              <div className={styles.heroContent}>
                <br></br>
                <br></br>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className={utilStyles.borderCircle}
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg} style={{color:headertextcolor}}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
                <h1 style={{color:headertextcolor}}><center>{pagetitle}</center></h1>
              </div>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
            <div className={styles.backToHome}>

              <Link href="/">
                <a>← Back to home</a>
              </Link>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link href="/notes/how-i-made-this-website" align="right">
              <a>Source</a>
              </Link>
        </div>

      )}
    </div>
  )
}