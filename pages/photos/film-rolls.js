import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

export const first_roll = [
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEV5Kddj2KMUix28-tD3VHHw7PvsEhqe6PFx0IwhS1C75U14RTUWcxXd0X0TaZ-yYtrHjb34o-N7Wp9G_lqwIkYp6QV1yTWhq4lAxErm_QZMFfFUFffDlWuTj9bFXGWn-pKF69F1yI1RvkOY97ZIz4eUtQ=w1471-h975-no?authuser=0", "1.jpg", 1471, 975, "6 Nov 2022 Accidentally opened the back of my camera for this one..."),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEW-NejY4VBuDWWZ25bC8Kjp4JupjEhzyBR0fQFTCWqOQzqRe4nrO5m0GJez-NQhlUHGoygLyJZB_DSsWq5bRV8N9OHyrsPdEhe8gPe24-j0xuPGyDOSQIci-WVuybK9lEuhcckslifNJ7jjwkXsL-yqVA=w1471-h975-no?authuser=0", "2.jpg", 1471, 975, "6 Nov 2022 Night shot that turned out unexpectedly well"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEUU6yHo6xvKLYp8XkNrUh76YPHjVH-JxlXaD_jdfvdHsMqAap2vYupkfdh0aZeWl1KND8FvDAXhrglsru5Mg9kpalGyMyqcbwAhU7u638YGg8BEZo5XnkiwfWZdEy6js7JtTKzLXbZNiqgAkUTgJeEISg=w1471-h975-no?authuser=0", "3.jpg", 1471, 975, "6 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWskTgdHGIN40aflHcYZcjpS0gw4_treBkSplUHaJoMsAY8wPbXXOBKQz-AZtK_a-0mRb4miCzUPzuntABO90ihgzbqbHv-nhRiSMPzy4CIpJXNKrHgHJCyBb754sqxCgbvJVWyaUnxFEKKxARhei0ZcQ=w1471-h975-no?authuser=0", "4.jpg", 1471, 975, "6 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEUbW27FNfqU_rEFjtgelcgbBEbWdgE88_b5u124jydue8CEnRzRTqfUwHNxmfjXeq2TeOV2y8d4TFIIiZcMOUTApHOYx9_4D7WcddMjzMSKgHuAcnASRl42SY3FHyir5MQJ8UQglZf382pAP97UNFNadQ=w1471-h975-no?authuser=0", "5.jpg", 1471, 975, "6 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXIXZKgCp4svzNXb0flIhM1cZ_Mww991NdVTDw8I4_PqTX-Gf-FAXqXPMeOmPedQNdy_6a62JkWgzugfJ3sdvGrMzI6DSMNSkfRp4iaKC1mm9tA9O9mXRMc_FtViemgIBZMEO2XHxymDaK7HY3_WCdRPQ=w1471-h975-no?authuser=0", "6.jpg", 1471, 975, "6 Nov 2022 Obligatory moon shot with the chungus telephoto"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEUEK98xFqIg4jtOmFx0lhN4uSwtW_JRFAvyx8CLlJdCo8nImKSba-watS1bAOKEbIn6Nd7ZWCJ-UH831eq-joXkhlZVklUnywiZB0MZSGMNQDFu-cUmSJ8XMI3YIgqpNByuUhmaKB8qB_TqCR2ctez4_Q=w1471-h975-no?authuser=0", "7.jpg", 1471, 975, "6 Nov 2022 Obligatory moon shot with the chungus telephoto"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWfT65Ks58Mda0AunOoSggQW9_e9YuGjrkfjzYpzxCZbEbtXW6bjq78ckfABRnrFEexohLfnCwwIAmp6ya8QxHSntKMwGK0I8I5boY8QS-r_iP0DOlGyBjJmTqHYdsEFOpxvNCePwjEVyCIDL875jms5A=w1471-h975-no?authuser=0", "8.jpg", 1471, 975, "6 Nov 2022 Light meter doesn't do well with the moon"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEVgmUUcGbyP18qOZOlGVpYmYbA32BdQY5QsFxPdPaFLUqh4y9WxJFQqQc5TPEHfdtXmy2WvrD7kzEuFOnsA6NBStfesxlFUKPMee3xBfedMxqMZkDEJEx7QoFJlyw7VvHdm8snucCvsIu97rzaxrHsC0w=w1471-h975-no?authuser=0", "9.jpg", 1471, 975, "6 Nov 2022 Light meter doesn't do well with the moon"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXB6xbXGFBMEIESgeMVVbOXg64lyK-e-Y20V4riKevaYqLttVj8mDPSY2EBDlCFt9JhXqJIpdMHpL6r2bvqy2PSMj9_L__JNwBUSxY83YQwYRh0j7AYiz7hAEU4LjskHPmTRE-Ds8MNj1SPeSd_G6ZZPA=w1471-h975-no?authuser=0", "10.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEVC2W9y3LSXKCpWbHlmJD2HP4waH1tBKqBnQDecyI7DEcSA9pRYxdYqpazIOgFYyzioKQWE-XKZViNGGVCmjLeRpa51ZhSJnne2sr0nv7cYw5fd-6JAky7QIxRmMSAe8Yp8-ormJQQ9yW88nGtHb4-1cQ=w1471-h975-no?authuser=0", "11.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXoz3dSqejzl3otTIW-K1g5BdTGx5jpKo8EiDz4PIyKPZOBurKTkpQ0dMzxS36KguefdRtts0T84IgoaLy5EuAR5hk6dgK5IH6PVi1YM-tmDhG6KwODrIwCFAZZgqA9dWscKDaz9lttRlxnRnGpAvECNw=w1471-h975-no?authuser=0", "12.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEUdcU4HJD2MXD2ltsUTLlz5Sd4yf9iW1iPSp080CA1kpoFxebXBrimlJOP4cLbJK7VsNwR0VLH4TqQVUk9SNE_SLi5S2PPijHC2VJD5HRaveYqpjTxNWvYcAcec85MflgeWaG6kSt5J5rOmDB4l1ja6ig=w1471-h975-no?authuser=0", "13.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEV6kRXa97vW1FW4qve-WFPO0dqDyK4x1Yj5cvgmuWPs2-j96OQSInW-jigDrQpZzpRqg-jOC8TwMATg7QFGiH15Al0gciRUxdkdeSEnmmUpeylMaoyOCr0kkyi7IW5-_uDV9qUVb4wu8mgCO_ixJMURYw=w1471-h975-no?authuser=0", "14.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWjfEi86Xxe7KGPvxAt3B9Z_Cxh8XopuAUkfGz2ChFHH6d4vVd3M5Vkdq-tM1LTZvcTcjowh-blrl4FaVoH6Kl-tko887PXrOSxGpbUUGw7FNzjw536cKOw88BUCRK1qw_lo7aAo2mtqOZUH0i_5psuBw=w1471-h975-no?authuser=0", "15.jpg", 1471, 975, "8 Nov 2022 One of my favorites"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWEcRDp4hwmcbEEH_T8NiZx4_bIwTUP0vbB7JP3HjgdQ3DC6nU52IQFm939khHr9e2B1bWFxKSdgNcDVi3umZwFqa6B5KEOHM62UD9-SsfdnrLAmboSLmbPYi8lgDRsjqsauMdh4gD7ZaXWROYgGd4Jjw=w1471-h975-no?authuser=0", "16.jpg", 1471, 975, "8 Nov 2022 Gorgeous film bokeh"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXoHHQ7lwqrcMXYvwpZ7FcfR3VrXGq8zomOQq2R1ZdLmCkOflEdspZjEv7LN7qHmYdzrEH5nyFPj4u48GkvzTDHRYGSd9Gnpgns6ZIT6GMZr0S4FOWffXB3iXZVI_O3qqXzJJbUnF0AcleyiTIbNclMhg=w1471-h975-no?authuser=0", "17.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXLxu6XsBjj-N0tgJgrSajQSmlY3-y5ShI_EsZ4OAJsgRPy53lZY5kzaeJttkzYzTHPsCzFjAlCp5uewpav4i3pwSpQJSiIyJPNMtjriRUPnqHwWhXo0mrDzfDRCK21L_BY3ozDHY_mB6cZimvJALJhHA=w1471-h975-no?authuser=0", "18.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXLIOv9mfCgzM7UOM6gMp_2m2rRNeihdr3Gtkt_6UL6X98rMbQMm62AuIlLzF0QiW9zeA4Vsq6Cy0wb3cFtVZWVTSbxBkaUz5Bq0ch1fesO0fX5cIEn4vqQeTMxR2WQtY1Pq3rSFEgVCKGcN7u2-Zr7ng=w1471-h975-no?authuser=0", "19.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWL21Te89tbKsou-Ut8ExCnxib2ntGkzjdKO3XvNcM1m3MoJWaLejIfkXtKS4G48pcqGssXiUoXydfEQWwQroA2CGOI4M5DRZMm189gos1F192faL3TCMWhc6RIDqRK_LJEtmFzyzjaKOz1RqKaY9pnVQ=w1471-h975-no?authuser=0", "20.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXdu1I6aD51ulzWL81kebMW4v1mpoVJvVLz9Y5AVVtOHqqqXcR0mvc4erLYnptmvvV4Gn_LX0yR5gRVI7r-TUXQaIw93khxSW9Fg3BXG3Dq6htMQbrMmeBO7lcEoYhXNmTzdegMmPbJqPkPIG2slLxOLQ=w1471-h975-no?authuser=0", "21.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXchjCkF5h9-k8DAluWnCxBLbKjJ4vjlRAVKDFCtJPHIOH1_Pab_MF-38coDIz0-k6yVWluO8kBmpYg82CYdFggOVcFSKjZ7jyyA3Vvdzld22eZhuYzbcL1BQeqVfLBDudq0D3bl3WSHnF5mDKg_lJYcg=w1471-h975-no?authuser=0", "22.jpg", 1471, 975, "8 Nov 2022 Grados deserve to be on film"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEUDAGH9HOb34C6X13hnXBBDKB6GlTStiRTgZpswjqUl10Bkli0zyTLH2AZCZSiPZonvL2aQZv10-jpI5gq_I87QvYRkjxZTwKGxCIsj5stiuDk5-ZDfp7SK03Kx0ZrvS0HXzpkI-0Yx_oxegJ8j8cBYPA=w1471-h975-no?authuser=0", "23.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEU2ngaJv1i3xAntVtwAUkcAFvmxMTa8ACBLO-fsI2pmgCgbWN1wI4hn7cMjSRX8OupVkMukO0hnoOfbys96V3BipvmdgfER4Qs0QVVPi5ddhKgJjDtgCQfq4-NCu0mdQtMc0YsTDCZjNZ-k73TwZw8uLA=w1471-h975-no?authuser=0", "24.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWRtZk-zst6bfiy0Jg_fr9Sjl4q8lsqE_qwWS6d-cLzyKnwVzgbtO71vHb5ZUVu7OgPtg4X4LwEWiHa3p30egqUs0XzW-kW0S3bB5_xrNqv3_O0JiDV0CgtsqI6JyOi1z4YXTHMvui24s8MG2AuKzjeNQ=w1471-h975-no?authuser=0", "25.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXZucd0JsLf_1-M1kEjhOg1uZkOa-9HeBX0lX54N8hbiOAEpCSCCsHrUDAU72bfp_AannpGwSzlHNwuKlpMvuGIhuuyghk8rhRY_WYKXCPTm_N-ewjYqj1KD8IcLf3FTXaf5TBxo-y6iRKhwtZU73fHmA=w1471-h975-no?authuser=0", "26.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEU3_c06FdRJnZhIeDhLoKf5rkuToY-S2wCJ5MoIEzVOq9NCVaM-ihOl4SQg2qeiLmEycquLoajiKoZT3AZGPOSAXFfB7vJhUncNh83MtPgkr_etFcrm9kRQjflBPwyh9383-3JEZdKb9mDYyGXMWovJpg=w1471-h975-no?authuser=0", "27.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEX0QgeWWAzx65Syf_Y_0D6dwMWQm1dzj52nYj3CrdzxCofNhP28oxqxLSHHAomT0SBJ5INF2cnrDftWPEJc2LHiuIEmxM-A88jKQ1kR89TF9SPD-Er4DGwWahMzxWNz3Kg8gG9E1H1EmlBqLcKO2fXtQA=w1471-h975-no?authuser=0", "28.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEV1IcKWI1vCgmoqpHkrSy8fm2AcuvKSSMx-mQjt3Z_WwaFM5NVDV2k4MoU9dvxnUooeFPJk4VzkRslB8zBnSFS4qQME06WE65xPFvjHAATw4zg7O8AD4B4vdkePm4EucQWFGP5IMytcK4wcLNALxJYrCg=w1471-h975-no?authuser=0", "29.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWpUUuumrjaVJebD-ny6uBjK1cYe_lPO_x8OH4gkDXk76yUn02DNTwpqIUR33-qZJn8sDjvPtVZfmn3Aa5VAd455VjpTP0BUz9nRjx3WTO6eeyEwzeJp17eXRSHTtBZEMN-IUgMiMLyy9dLE95tdF6KOw=w1471-h975-no?authuser=0", "30.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEUzj3zlyWnQDk_GrZ0N9uC0fQCcxbONXGhVoZ5kroPB0B51Tl0iaTSI6bN27q2z-Zpup84XKo7gidrH-OdSkFD4kLCEdqKDkcTDkZVURyy5mx49sOYb9Bjxz5eD7O60XN2i8uT2JJ5Gu5mRe59pOitxBw=w1471-h975-no?authuser=0", "31.jpg", 1471, 975, "8 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWh1oqL7l0Ms9PiIJL0ou-Io-s7jvb-7jV9yedK4e93NlIp_ucdolZfEnK9GVRuS_VMCm36nYujyq1hdxkNZtx4l_qbfZ8MMpLGv8naAd9I6kL-JrJ054PYR7-GmSqLKx_JS5sIff71jgy7b03JK7ZyBA=w1471-h975-no?authuser=0", "32.jpg", 1471, 975, "10 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEULcYpvFCI2TkQ8A7DtbAvBf_9FlS8ugshchbHJR7piNpCCj41Zn8eX2cAOTvAh4vbkxQdQo4by2eIsBS4Ll2hWrAfn3-eDoQLANNAITL0_QbRgE36hHpn6MCXcqHNw0xfcmRen8W6jnuyLL-dNKsNYkg=w1471-h975-no?authuser=0", "33.jpg", 1471, 975, "10 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEWKHAPnFl1gvVPq7YOjeJwcb48ErkHL6ldbdzMEcOoBlhnYLAKTFfzYZoE-xZUN75mmdQen_AQe6EgiO4GXxuxubqjT1ztNFVIjQ5r9snSnar7g4yzp8mmFPbWI8QiTPyhH6fVNt4lqqkM3L0dx53H8Rw=w1471-h975-no?authuser=0", "34.jpg", 1471, 975, "10 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXe6aStTGDn_cqsiF6lPmfaNDNccbPz4GE8tiRX1MrVJvb9gm3TOZEjiN1V3ycxOTZ-CkEOum7WkDOl5ZqFjUGt4rrkcEue8EZ6880uvWvv7Y2Sse-UbNxXg0q2TNeiC-QMofvt1wThLkLTh8Idt0kSog=w1471-h975-no?authuser=0", "35.jpg", 1471, 975, "10 Nov 2022"),
  image("photography/filmrolls/1", "https://lh3.googleusercontent.com/pw/AL9nZEXw9NlzSoTGN21edIT5RguaQBpTpve0QXdu85lF1cKKwaeSYzWSiPuThSStstHm6B9jSOSuqZ1fFisDXmI3QZIyIQzPECAT4EC6GFq78OBOA7a8InxnAWmGDUgv2-2B9StFQhMN7MGa0Sv7jQ51YvDjOA=w1471-h975-no?authuser=0", "36.jpg", 1471, 975, "10 Nov 2022"),
  
];

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage = "/images/headers/photographyheader.jpg" pagetitle = "Film Photos" headertextcolor = "white">
      <Head>
        <title>Alan's Film Photos</title>
      </Head>
      {galleriesHeader()}

      Here is my first roll of Ektar 100 on my Pentax. Most of these were taken on my Super Takumar 50mm. All unedited

      {gallery(first_roll)}

      Last updated 14 November 2022

    </Layout>

  )
}

