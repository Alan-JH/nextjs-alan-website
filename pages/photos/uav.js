import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const images = [
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEVEG9hzWSmAXWMwm3Y7_N3hsNDEpFRdFBbWhCaarXislPmDOeS5azvcVt08laB9eGxDYIXZMDJR-DO0O1Wvs2TJ3IYNM3nwe56EJ3dOTszxEVNiwOUw4V3d7w_uq0YLbZAooKLT0JKSLo65Wj9vwJ53=w1463-h975-no?authuser=0", "1.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEX87ajo-VT75cmHxNG2Co8mU2R1AKohRIoH20uIS1R5VVVJmEtYxiZguDZt5Ew2qw2qovmqI810B4SxR4d8sHohCOHk0Zau6usn-jh2PGxT7fTETIxLAYs8Et07R7jlh5rFMNQZE7_wlsYTRLVjvtqt=w1463-h975-no?authuser=0", "2.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEXlLvsfoxGTmp2xZHLMgCTvZm5-6HVhpEBh2fZKfsZwERQZZmOEeo0fr_m3yfZ952c1x3s3eS4kWlHTSvYymdR4dbck_fNqDNl-uWddbGQ4lMbCtlNdeW83KtAzqF78TuuOPqLEPTwBV6woF0ooSHcv=w1463-h975-no?authuser=0", "3.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUemBfQrDRkSbWi3I8YKUjWvP0cCEB0taE4wU2rDLbGb50jsNT1bWAkkJVMQ8dnKjSLEaLxfebn8Xq9UUjt6svIB5vLdH-lSpKM21u-SweZAHGNnBl4sFguNmhmhmOAlUMznKNbImzTu18gTcIUMtcK=w1463-h975-no?authuser=0", "4.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUe4H-piDc7yeZ6ROYwpkiAZ-MI8iinkFWzR7ejaNpKsGi6zgUdHtxNk0-71EMkbRop8vY8CqBTCw9Vk6NzPKk0DeWHlr1W_DvHC1DGwJrm4qLk7sKl2Jxg1NPHetv42e2_qmajmjBmlC1-ZJZQoef3=w1463-h975-no?authuser=0", "5.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4 | Discussing flight params with the pilot"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEWPsDm-NKe0CeUvVy-JnpLlkL50E72GQA-uT5lh4oOAwSn4nQkbgT1Fbxkox5MSl62GoszHleF9lazCDQILuNZUZTvCAQgvFi38UX8asyhpamh7vLP7CqA87ImY4n1_19DozyDYbFpjM4cPK-lP0VIk=w1463-h975-no?authuser=0", "6.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4 | Avalon lined up"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUCqCM1ifWgLGu_Ld7l2Z0AibgPwdYOHnOeJnWtbWastokQzAfPitQijNGhemondf--PrSEpDI6cv3JFvcLn6hMy0Iy0jTVcM4yTH1VWNS2wSsEuh9jE964lIXYnVdAvLJYCJPgwmKhlEeiTn3dPOZK=w1463-h975-no?authuser=0", "7.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEXO0S1_Ryufqs07grrOov160ITVYHY9WPlUNESeoil2Lj6Ri2M1NnT4pO3WDnTe_TJ8EFuTDcbkQL_Nj7zNclZ9bK7mfpI6I9HpnBxouFTqNZuxuJT0jHAoOHDWeLEqi4irSwzIk_V-UNwAo3KMD2B_=w1463-h975-no?authuser=0", "8.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4 | Photographing the photographer"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEXDr047nfr4KkQlGUmbatYoCUHwhjUTdqPUiGH8hgR1rWsnBB8vm4cBareWaO292xsVQEc80YKbqoD7fiBz4-NQaNlcrychH5RlwPeaV7kETlHSTeYggPtx4JEF4NrcXLOnO9ulLmeiD62WlLRdZuCx=w1463-h975-no?authuser=0", "9.jpg", 1462, 975, "9 Oct 2022 | Sony E 55-210 f4.5-6.3 OSS (@55mm) | Avalon about to take off"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEWS7rsKB9JApT9vPMUCnjdIkjRqpntATE5Z9FdzlwnllH_0VltMzCRxXNeqzbJqbcu-OKV3TnghJAwqC92vJ77D6SBIswa45k2CX_FkljAwoQhhb8jUdWoBO7us5osTuCOy0aAje2Q7ijfCAF5XJ6_W=w1463-h975-no?authuser=0", "10.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUFyicGmSxh_SdWdgsQ_hpMaZvVuIDjJNEwKnmDUsLowQCpaTLwlSe11xGxtetOc83gO13VnOp48jWivQTwWxvtop7vMHkYkyMGoBmAjGhpsriQWZ2lV-g9iyG96Y8vB4Kr7hSkBCEZW0yd3A9gXuEP=w1463-h975-no?authuser=0", "11.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEW0js8DXcktF9g3mJk5fNXyCiwlaVTOkxFMB5J1Xw6W4BMPyA4AGvNmka6JxencuWyoitsvi1MpkDPUKN5zqT-GCUK2m-63hneJ9orEDUGpTY7lPKKSjHLbpP0vduD5f2e8FuDOVM4Wv1h7P3J2i6Ho=w1463-h975-no?authuser=0", "12.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUD-dpeTtK_u_ySe3Gei3wfbyPwAtwwt2Hat0mAw8TgkPiFyYRYozkoVaiIyQkf_uPGALBTqkl-OmjhUgA-gpHXqJz3zQYM9OjpOM-DDn4v4vXPW8B5Imy6YlNSs1zS809eqZ3NB3-cZbenb5hzwbfL=w1463-h975-no?authuser=0", "13.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEVkWmYduFufKB4o7c9r5CVyzr0M8qjfimDXajkUxaYyiuAPGkkbKq0p0t-LXsNmtjknRNGn-L1uGDT7Olyruat_Z8Lpk2npaqy9yRT6mS8F7xBrtRB0L-GbScSp3PbU9greF4JUsAnZUIPPwKL2Tchd=w1463-h975-no?authuser=0", "14.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEV3hancTiATitXdDp26IDBDHQzys5YUrWNiw2MdQUiWY21p8VSZZb_2zMNJlFv0f1QJF0L0iAo0v-8kRtOMfNvCA_Y6rMFT_01MgD1FBpqeeEkGqFQsXIextNWTqaRaNCPthONwbiRM-ze0ZU9Cgn8G=w1463-h975-no?authuser=0", "15.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUwO32NIfVzcnIg8YX-tOSRTxGbxqT_172XYiwD00LgfMBah1hHhiT7EqkmOmenrhR6e7d6yhOUxK1AAvrf2b8tD0P4jlL7Cp5VDyw8VPklqF9YOPTrfTMG7CyGGu9i-gzkPyRycxhusNnmmbbQudpQ=w1463-h975-no?authuser=0", "16.jpg", 1462, 975, "9 Oct 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUPO_R_Bn0fQ40kQHzBn1Sx5o_5VVyRQw1PBZaTUzodFzeW4dozssyu2VMPJ9wXokHrbjJmCNW3Go6bk7K-GpTL_NlvQD3vW1pYzv3SuwMV7dSFJ1cfaI33UQ7qV-razpbFOrqfPfVgO9biaxuHvLy1pQ=w1463-h975-no?authuser=0", "17.jpg", 1462, 975, "12 Nov 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUFs9H593Ml1p5LulcoUyz6UKvnDnCOcf9ijMQgmErYECMgl5s3wn32Y2YqdJkaL7HhONfEBd-hhX675HDCwOn4VgH2J5hY65Ed-tXAXZ5GCzvruTObBwEX4D2rYqYvl-JHNkJDFAcydtZKOagOxREKLg=w1463-h975-no?authuser=0", "18.jpg", 1462, 975, "12 Nov 2022 | Super Takumar 50mm f1.4"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEW-tjaZd63031G_mY0efdkxdNhdslwpkyK9YT_LwxlpbmDb9KSs6BvaT99yeEJMfFfo_wZjbxrHRGx52x6EPtKzKnVHY7MaZulT4SQdVjRBJ_H_CQ5aByzDrCF4Q3MbBHwYsAF5tuPhFBroGUTDbN-wdA=w1463-h975-no?authuser=0", "19.jpg", 1462, 975, "12 Nov 2022 | Sony E 55-210 f4.5-6.3 OSS (@55mm) | Rough landing"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEWmiohiJzG9tBDhcWRxSsNbDGJfGrgotu2wO0l8hWbQX3a9fxHS1AgqhvIB36VDGqdhhXBFf1DaH3NdMk-dw1Y_FzNaXjfsEaq6pQNM0I8QGws5KhpmK5Whr-gKUQs_W8pMe_AJm8iZtC0nOypCMgw9hg=w1463-h975-no?authuser=0", "20.jpg", 1462, 975, "12 Nov 2022 | Sony E 55-210 f4.5-6.3 OSS (@55mm)"),
  image("photography/uav", "https://lh3.googleusercontent.com/pw/AL9nZEUONMCCXZPBsOC1HOZOzPDvJjevuC5wKgtPfSnFxALQ-qUTasHCp6Q5Uz-6yP9v_1xKnCzr4Mi8ysWZQLtgmb0h9SMUGKpFBXS1tklq-RLCdyx7_iWpejnb3jSUc9sm2Gkm5NY7yIdQjRpUz6mGl-Nt5g=w1463-h975-no?authuser=0", "21.jpg", 1462, 975, "12 Nov 2022 | Sony E 55-210 f4.5-6.3 OSS (@77mm)"),  
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "UAV Club Photos" headertextcolor = "white">
      <Head>
        <title>Alan's UAV Club Photos</title>
      </Head>
      {galleriesHeader()}

      I take photos at UAV test flights, and some of them are good

      {gallery(images)}

      Last updated 24 November 2022

    </Layout>

  )
}

