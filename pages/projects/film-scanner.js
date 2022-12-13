import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import styles from '../../components/layout.module.css'
import {gallery, galleriesHeader, image} from '../../components/gallery-elements'

const title = "35mm Film Scanner"

export const lampsample = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/45tWfl6lnOjUDGLo3XO5V8DMmXMougXtnsAHlofuKZo5dw2dt4ZH0c3TTwI0WjX20gVLLhuPrnvlj8_OK5l-o_53Rnwtj5rCV88bNgRfNYMs-pY6PlUnp06pFSlKs57Zc58pTJWxa7dqOiR4gJg7l_XIN9nH-OYuH7bZj3nnU20XSSFpmiW9llD9cQaKZdLRUKO5HsE2wFU6Y0PZUzNaoEUp60a7FuCtt5pZJSBcb6m5kuSSgFD1UyzSl2nDILIwJSPsDFHm8SPHLrtAXds62vBaYT9yaWm_MH1ey4IXwJpN6ZaaEe4hjKXehmAY8gZiKz6RKxL0QE1K3fgSKtcQ4PIg0i6y2ZOEOELUUfDdjV59hijT6-GpDgK72WXPeQljZLG1IaiIi658eEdf4P9-EqyKHFlOfdurTcjxMFUeMmExyTuPuzdeYsFbJGUrxqv4fYPLKrM03KAxmrgywoHu1p9bKEcX6xU5m0OkNNSd-tiSPyDqHmPxO50oFqOU2jX_FHBc1DhIBRcRRxpsM3Hr9PhH1Twb5fBI77FREc_LcQ9HoDFBWu17TUHCk9NxSPcehiDMd8LO46N843KWTlnD7pAUgeGoGmsz0DkRSRGk3nIWdcc8Yx1E13ka8DcmsOi-J-C45HHnA125ZsbBp7oglxu7K3u4EW1lBSXXadpbVSZDANitrIUlrDJo6sqTrR-odiSca5ehtlcSzR2E_Ib02znxwAyHiYW3n_eKIdBZiMMcx80l9c98q4az8odMUmOWJvjIcJvqc4o4aphllDCZ_AoRIJ_lKpmnRu4BOiAxGuoJ1EfVf7Y-uz2MiC7eGpquKwrRPP976JVyeXA1o0GBVvQrVsfLe8NO7qfrNrkQ3eKpH0dY3v8Xz7Zd6ofyNLdB9XcOXvy-LEgc6iEdLYCA8h0K_8Kgzg98sjQ9nZVB5JLflA=w1999-h1336-no?authuser=0", "1.jpg", 1999, 1336, "This one was out of focus by a bit"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/kRUNFtQX1-LpAz9t2NN6H53phm1BdICDEiPfwvoDGDM48ueCwqVKi-YvbkfNevNzYZMzsWQ_oOfeKlmsU0pDUlLBYp8Ago57n9YmlULEPX9KI8Lub1eEmW1BpCj4Fxq6KFxykzKCXiap8hbFXKCwGTWEH6mGK7c3Czl3iRawtNcjq2V0wN0Ta6HcEn464qpNC2PpMZ3-PCTXV6-WJnm6BgZx5FcUYf-Gc_6N_UxG_E2AdsW0rk1QqasMqqKZ3WFP6xJejBNE7BqmezR5AkJuNg2HyFVoFKB1T8hO6mV6DXf5cl1zMlGcoYutfTBlrYcejgViCFlbyor81shZVkefM1SWxrEuxH1TrhrUiJ3fHbOrqlLUjVfVnjd7kZCdpHWavo6OQvvESDcb_TvR3vjRiZNCYUe9hFgGxy2VrQ4cHNH_QQKBlVps0BckS0O0puwtk4FuiAscrtOFOCYvH0DmtB-SDL4k6OAwep4_L2Tw038SZN2KnnqUjWEiMIx6D09M_wFDBcVpWxGj1NKJPSY1PZUMNj8nLrtmNHSlxFoHbaMaPbflc0WEX6V0Z2yCUNlTm7r6doSW8oJBxEfIVpXLscyfosmyXPSUlk5vYYU-zUmLqbM2kOXridkQsImf-Y3ulSDu0L3gneo5p1tJtXR07jFiLonTKi9xD606Md4Wln5_p9R-q9QNJJWZF4wydgqYIb8d6T5tGagw8dI5MSCnMKykxGDJwhrxjX6LCGka3wol3IhBC-cz1PbXzvgppKkw784SaKAZm-2tCh66zxH0Dk_u5jBCoR8xa-hZgnBtif9WwMU6rS73PMqrW-z3rzcxPaemRLSW_J1U2DNvtuhXCBMRGh7ahHh29JkprAuaZLVB4pgToKMe34YrqSPUDJs7VI8xaHCjspiKi535N5t48mJzfqEYhRIQSuII-mZHC_4VbA=w1999-h1336-no?authuser=0", "2.jpg", 1999, 1336, "Heavy color correction"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/TcLewjjKUWlVl7CQtnpH0JxEJeQt9NyXqQW3cA2c1v-MwPZ_1eiqDMSDNoBTPlNgP6BMmlN7hiY614sfyTCSyojBd782SBsKMAdR8KQZ3xz-8iekwIo-M9L8uN4x5_FWjYh0cd7TzOHmn1bnFskNoX9jDtk3bBUDKBNMDKVXw2DVHda2N-wzoZRRSsBSszJnbq1ef2EklIBdGG3IMPhgQD5ZsYprV6G6DZj3Bpc8s6nCcqRKd9HcOdhJgBOAD2r50k2aFZrX9M35lXkxlL3H0fqi8De0uiOPqkK4TFICAf4mjDOu2V2VsBEONrDcgKy2hJ4TN0mmduVzsweFFEFostsSphRVCxvFx2jHw9ug2L7NXb5RM2o5sfnMV3SHJB4biv29FzYCZ3MRxDhFuTJxNuo7_bgk02XfNjEDhi7sSErVte8GChGIMN-MWMwupijmXYqQj1RLjCaVT7HLTR8AeG4OgsWO-4kq1rEYptB7oUjiKyMW9jgZhNGd0xUGbIBwA10PTpiX0rOA0o9quBJtc_cRgpzdiuvwuboNrVOMwU483x1HhnrycE4mzxMfh8TeVHCnVyBUNoWzY32eWDXjl0yrNQI8f4hVyhOGyt2TzXArjANAeMA9WbcKhujhLvJLcjZCr_sO3-lv4kyTumOKTS5uzr5aN4WyyS79CO1Lx223fRSXoLqNNHW4d2u4OL3-0FPPtMfiVp6cYzN_UsR-X9wFDDqY-pBp8o_-u3EV9qQXsva9Hrk606NF1Rb5S0fnqF5tratLCcX0i1ddxuWR9C_h_lr-PXylkrqXW3YZ_TsQGKixxP-dLZdmzVVFl9LTqsT1ajsLxmBmuFx4u1nZS395H4P-5ofGWME0yjs6YpqnnY2y9VDsOpkm-PS8QnnKJF7dmiFNpiEfMqzfK6-9COUymkyYB7TygN77eV1KIAV_PA=w1999-h1336-no?authuser=0", "3.jpg", 1999, 1336, "Not bad, but underexposed before inversion"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/N6MtNK6ka4trKTC94OCHLNcKX-xIxIKNqgogkmZbNpfbA9I5qUlRKVcjk-pLvaq8hXZlgF0nlzNh-kPvBnd0qveY6QuMaKFPzdFPVT0fPDxqLtCvOmvWatWcX19PE0PEF-Adf7PyBnm9LOFao1Rwsle1O8r9Cx1IpBnAmecEhF1aI6ZmFpj_JzYJPIofF2-z9juugNN_ykeSbc0mXRAbIABlgd2Fk6cboUzdfOdJV8yqRvaAnIhlxY0cIYC3zknj81FN8jaMXhrmN6zPh43qVeQsOW_P9ArDWB4HmGlzOQedr7AKvqAqMpSYNqyi1Dd6tZXxrVMKvrb-paw22n7Gw9CYOpBeydDSs1ZljnuWkXWr8m2dRoejyEKUTm3HVluQYh3wttT-MmNRVdsUjOfrdtHdROF5mBJgUimPWBo255LAJX-t8q208B15NCQrhECmvsP_PpK7UkCKw0wpgfK1lviZkTRhiqPhQ14GQ_fjYm7hFsyVZJ7MhO1qkvMizZUwE0duD0f3iTbPMiCdl7i-1L87-vLh798EkcritP7ht7hBJ5GTZ06XC31Pb5UYo2sEqCY-yQMUyxhcq1-ZL5TkvxztKSbh1gxRSDe3s_ne-VO7A3gt5NGt_9CXILWGqWEV0M5y_pYJiDFIoCIgiwNo8PQ_fugD9FpH7lQKfp7IP4OXarJj-2yu3FUV6npBNYuZsHGDvbr0DsC6Xsubb15xLr-jXGZWpBcwWP92scbs8_bOZacBqmYZjYOjmjL5JdCKmYa-IV0qM8hATaY_mNeoHNxgaJgaxlgXlEO3OKB35QsARkqsF1A3Y5c9Qq-QEU0IaiwFoohdS4p4ArrpFmlj0WTgRGyTbXF01cjjy4Wky4gUncvMNo0XRX28FQNk6jg-QX3C5WKrVInomfhKy_BmpDh2ih2ng1tndb4Zz2t7AO2OmA=w1999-h1336-no?authuser=0", "4.jpg", 1999, 1336, "My first expired scan, absolute hell to work with"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/08quvhyla0wUGHsvjYeowfyZnLzOUcCtufYImO7Qd27mrOBnO9-sdA22NxO583sP8FtKrIFDnyUBXw5cHzkjRowjYU98z4Ep56dR6tKWwu_K3n0bmxPGjhl5FKr2mTvXBzkTjCI3ZQDRmnCl5gipKh_6RBb1Ro82e1JTYYt_vtJIq4xKzl7l7rB8CfTuGW4b2NsdE_z3Z5B2EbXbN5focWeMwtVQoaFFtI-VfRJCF05_pX5tzgfytNfChgCcPIf4rpGQLuqZ_ywoPn_HFdSQdzpCfMPiBSBZdcP4m_2dw2WV05zO2heHRZ01nF4ZP9695VO3V2qo5H55d9tJTFVuyqnveS-zcYTYxvNF1ZGdheam7TusVyvc71sMJsnd1VgqW9dffmUAQ76Zm3_FJjqASNHsHi_gg1FEBUQy54r_sv4CvXhqB0qQWT7fpl9GsCgTikZXMacRZHmXG1ot_E04b_SIZxnPrtISC6AJhwh1yTsIg_AJEIAJi6nHkvqwYFqgTry0P2l9bEG08b9HZwCpu47f5uY6mNo6CH2epWK-w-NCvlIn1R3mwoskGXJ_SH-LqRljhNhJTuoz4UgIZviu27oQIAgyf6mOttthkXfEL9uk7o18NX-XEaKG7cU4S5Mc5iKQFIeEj5EoxBRH3TeeNKpNcSb3BTRmFPWFzp-g8qLGVKjksbgknxTrvootdfYaZqgHslG5dunE46EEWWzu83Hy2MW1_H0wL-SglxnGhZZ2ZVdVE8Z1lILAU74WxX6Hv7TEdP3Ea-kyCeCjcdxYslpwX-k2DNH30F5G_C83tpo-0fANxXguEUz2jjb_IOrRudJHiUpw1T6a8ex9PPQKuqWjRCSULnfOKVYmQVkcPKKG0VFj4W06boIISZC4S7E6-FLhvSAg5n6vEJxt97hNrZ4oPrzuZBeg82uR3NSSXdSF1Q=w1999-h1336-no?authuser=0", "5.jpg", 1999, 1336, "Another expired scan that turned out surprisingly well all things considered"),
  
];
export const firsthood = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/RBgzLQuaMPcHg1jtvy6BgY4cxeHVR1DHmewPRmbyYLF0r9LjWX0XE39q70iJL1F0ageSmXoqk9HJV3T5L6RRcrUxKCGudSMDBSwYLvk7Q95_73KFOMCqmKeBh-zn4tAwZm_BQnh4WdFjjMXq62nxc0osMX0rEF4tOFliT8sNOiqV8PyGZ6wmI3RGJucfyWkgMgThCyzvRpfQuWcijkbQd4nIkuVII-jsgjJIwE_u5g2_ioe5DfJ6mCcu6wFooLrX0PeDqQ_6dPpWxJKDLR40ZvzQjp7LpzDtOsGytB4cO34fgL_K1e4N018JCBneCBZEl1s1DRHMEdozmnonUuuj_ruv-Twjavcf_85BxTjlo3Vfto0fJT0CWI7cY_4GW8LIrwhIygZogCxM0jFRHH6MyJfDvVI_BGa8XfHZNRtkBJYKL6AoVOsOY3SJyDQrmJiuGBfQoZ1-cGzF3_cSt4RslAsOEtReRF0wPZEToNSlGeJ8VnvHUSqoKccGeH4NX8LCSLNENvJvJQM9u9erzWRfztQsy21Qzb1MSrwQuAFHi2WAd4P0M7osQQxMt9qEJ0jrTSRle2SrO-vLl8LxgT0i4oWCkjlW3tEOTv0bCp_1JCsqDE_9zp3x_K4iHGNvHLMo2nDGAUQi1k-3Ue4-LzJ0hDxfMdywiGLEqV49PHSm2kIPqL1yziBq_k0EJD0posqYoI8SkCJiaFVqcX1RE6Sw7HdBkpjDhRmE5miqzC_cm3la5PmgDp_eMBtoKcnfZrC1EYrws3UHhjHfD6RvbryfXxP1IfRGmn_nxFM1XK49MzNywrDMogQ3BUbivYODkUd9mOsi8i0EalfE1_cx1w50NwdYc3_49k5fahGGf4Q20R6C9WX0KSpAEYid6ZE6opwniunWROIpzDDzDS62s3fTfIc6MRcOD_NphzDRTJkEQlCbmg=w1999-h1336-no?authuser=0", "6.jpg", 1999, 1336, "First scan with the hood"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/XeNq54AhIkm1zLdpicHGd5Hv5ky0dKzaD-Bq7M0SMswTNVBTBnXa6Ad4ARUFH4W60zcZB6BrY-yoEnkupKj_V-XCF7E3g8XEaeRqhkrkj60h-WEQKFXwCnMy3LUFNCdtuJDOORFnjk-rDrN0Mt4pM8Ok27p-QAhVImhv6mi9ljhuEKp8pqtanVfQRXMWglTKDfTrRt2KCCmZdpbn9mgAKB_hGM8Ya66ZBS9jDZBEJatOpp5TgXqoLqiuQ1nYvDLikBMhj7HRMNkXxHWqZiN8Y747_y7YTer5NKBee3ZsKBUNWURB-q_bNSNvM-kWtn2nDVjuJYyGazJliv-kGoWbFFHb5vwTPnfvPeAQgcqNnMgbdat3QqdyJgefQp6kWbx7MdhKRkbfsMT9VHtB-b47mIQhufI_fRmm7ZQbn7RtxKAD-CmdXSItv957fkJqLCXktjHOsi4JhBYxxeFVHv5gVM-xbEP5c0C3WzdrXSK1Yx_G1AL0D4X8AGI8pZ1p0bMA8IjN-ldNBx7L-BT2aizyBcz_F4iTjRNHWFwtE_T9Jfxuk2i3Zr7TRAcRJ34IQb0MKZcSJHWWNlO1WT972QJpxTdHxgrE6uX-fAWFwc99z6BSBvryhlbgYpIcyVhBeApQYlaMUAp7Rv-iVcsCVGJUfDyqdJGBKsznqLAEXW_oYWPVsYFE3o-YuNmbLpbYZGDLdCDYkdhGMO21X5zIPeweyRn_yN-mns75dCnLACwSoscmm-9fWkwdoMxnRWVo0iA13-hTd5bJ0_H8BLz0A1Uan1sza7PxhhfnmSFxVq9VoAzgh7CY2GJ1m0b2Yxh1GrAgtILHZYVZhtRYtxkxmCwWxnhFjI9lbil2eq4ggrer5elnsi4IGla6VkXKV6SfzdITL0ztBJHEBm1FFTtqOSTTRIgI8uIy8guYYsg_3zvfXVJofw=w1999-h1336-no?authuser=0", "7.jpg", 1999, 1336, "Additional color correction, but still looks pretty fake"),

]
export const phonebacklight = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/OwvDDvEPhqRQSNuyiI8L7T2UB050Lx96h281Jao6rz2Oh-rwkx0prCKD4vTGv_Y00n_lorcKKeM8dk1T0P8OlBuIDDw-ZbDC4C_L6vZDb4i60c2726Sh4pDGgHlwiodtRfi56ilOTGU5VftRruueIKRtyvznYXnNl91lK2842p92nutN2U31w8Gwugt2MTfH07gcUtN30XInYip9XO-skUAZhtmjJKaAmPTFGlrlOKJT6KG8YB5SgETH5Yy-fcjApXbWIIKvrgoxcRpYxkYYRqXTYK-67YjDx5cQaXv2-oOeOGnYhLgXepCgh2uue9dO3lr5ta4b5AXda4J87vp4PcaPesvk_Czpp9-g2E6RdH27QnYqPuLE1vuEqxSqa4xiu9_MXzlyM4fbS9CKbIvBE75QG6MvoIoi3CLVX-Zra2vamAWXtDTA4LHNAo-ECf4gNtgcgGGAQtIURAXPMFjVwlI4B_5RaMN9YKAig0lPUpLp8p7skR0p8s3MmhYXjdTw9GNLxmgvu3zxf5_7DZEjW2zyjdSCjFoLzw7KAFnm7_t9K1rhRjuZ3uGl8QVmDnTsqf4T16RYinUkYMiuA6k3Ozfo7dkn1ESyycFtlODAOve-KP-dExzGZFaMj3BwG6zG0A-1UDRC-IO4y40m6w_TpCMj4crT9DJrO8XdygQT25z0g5Ut3b_uE8Q902DGpcp27B8-LCvLaAraPJ7oexrmPgioUb6TfCkd6gb129SSAsXlclIRV8EFSOXCVbe3PveBKwgaEKZOhZKWzDibtLk9nwLCY3BHqzShAxVBeO7_KgppH1Ppr9vSYGoMX88GChqLTgIcGpdnZlrIVP5hqsoMQ3hnkDpXCtogxxfGpH2vET6FmF5dEDZHOJoOpE_BzeNmRApre-nRogrQD_G5IZk60zNGKGBBsyYD-7TzsR4xQEdZKw=w1908-h1275-no?authuser=0", "8.jpg", 1908, 1275, "First scan using a phone as backlight"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/JHL1UaTqTmp9FoPXibuyZHfp6viXnCVj8uoH96pZLnuNSn_3JwspHDGRYz94PVLt2HFectSQtG3_a1EctcSdcE22PrWk8r7pkyYaFyAOAqwbU8kXUF2b9pgy2Srl6Ltfhp1e_wiTduMM00m7N9tB17gdfxUIiYlgGzgDGu0BZ_yj2miis_Ka6De8rCu77sDcmrmUdQQs5pkMhFKxz39TYpiZ1ga05ppSZjZYE-DvYKI9oQQfhe3YskeVAmz5wGj8W-xd37ntzamLNegI0e35XAqGZ6o-G3_Ml_h04nj18xpdUK3vfeU-R_2elD55YmlK1nnElhoc8JNeuhdInJ-aKh5GG0NkXjEraMzm-iUK_jFC369pSPz_TKd2pbN5we-Yqm3QdeWcNxyU0sn-K3DS44pXkR07om5WWXsyWYA0Yc5at1AzUPvSsE1gebdf_61JewCuPVUYEW65fi-XV-dQEwYaFc-BrJOyy1ghPjarAejafS7HS20N52DI3bZZSKL1NAgiQ64yX01NZcTVRoyGpemxtKV0ma-dcMif72R6W91FFfDdUE8lROson2eRakZXYoPmOS8c_sNnTJp8A3v0fCj8iOl8h0irK9z9P-tKWCoyH8qWp9oDNtfAEa1fSkfaG-wIOtmfq8DwKcKt1fSj_dRaon2H5Yjj0Nw5JKrsPZtEaXYKHahzOKrqetgc9_ojcNwF-RXUsSxPpM9Jp2oJ8sNUzCRnG_WMHHM868gQjovv0AyZcT5I37POyR-lmBS3kZehvv-eBxovHCfzXO_-xhAVF24GyR3zraL1H5GpaRcsuZjTi39yktl_chtMW9y0_BYqxzGZ2E07KeLgOEQ_XGoCeFeEVbPybLANxWj1j7jP6O1av6GZneJkgsuLXm7MFOADmEcEI74mUMKta1ql3UjEcfPF1LkrN6WOfXuMQzDh4g=w1908-h1275-no?authuser=0", "9.jpg", 1908, 1275, "When you see God's UI"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/I6E16wrGdDasneO69ytuMqqmNtUWIl-idtSQOsq9TrmzyBhwnJR-IW8KjvlyE3PpDJ0AaYIMJ5Krq0Maqzbl9BTbzfg7GyL3__voVhxchL_7pOKSP-TPqlvYv5ToR9H0xSOlKB0CEtGCvEvEg_wtWXSdXMAtEdX-N95rnmZ6uwzGDoTITiG_5rhHUcVG265vxMa0p9hX9KKomdO4-nol_AfuCosJnFGVSDtR_vNql1hUz5qFcYrZ82_dPV_BLfofL3la1wFNogQW-VcqUkZ8TSk3JZEAnBkMBj2SSZgUhedIm8YcD3DMgWrX0GuzF4bSwUqlzVb0YokWQD5l8Gicpt4I8olhScN4m0avHaRw9cDaUzG2XktKb-CKUS-dzDRffHXsSSvFMtqINUn59VwM_C_iciB9-7d5lAKkIAg-L0aFSFfZMGszRDSlpgpJWOcb3-XTlRuZShyc0jg_BImfbiBwLecaEVkHAnVA0z_ashUQpUkOqDfbUHrG3x7Y_I9WhOZrKkYIv48Zuy9yuRGsI_2L5F8XaRhpSPi-TNcU-sdS-0AxYdlkcu_Y3y1Zb42EwNwvnvocsvUaJQqw9eBq4uUfpIto7SEM43Xatgq81qnqfMgGRrSu1o7yt44VOs_lzdd3MIRivWKG-bqhgHY_21VdqL8bsnsyQ_o2XAHEZbxuNdHISeqo0mgDd_a3v0npv1frwqQG1P2kR7k1IX58YwUl8AHOw__NKSypz18InluwkWqdrPYIVjmsK9s7pYlnoZbrnqeJLEc8enXpAcCoUFFoeZjS5oAzT5HrbsJaSq2ZYJF8h8_Kwacsxemb4969yzevUXdejXRzEXLXrAVmCtrVE3XeBdsyg0bdjSmNNNP2yG2vl-ltYGFWdBmI0WsjJN5aSJXVD2R6XEu8FuuBiFMnJqb7iRP9USHF8_o_0SImVA=w1908-h1275-no?authuser=0", "10.jpg", 1908, 1275, "Another attempt using a phone backlight"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/e5ZOdfovvj8TLjoRiiMFMukJSRho6KuMZH3tN9RdBpOpUd-tZ1jHfX1sAycuEYwAfk_MdfqaiHfJLuB2rxdUmkbp22M1aOaoi9POF8bcYLlEVdllM56bGTlUwEgSYW6bCaLQFQ0dgZeqzADqWfFO0_DeZMgoqfWaxF6jYK8XeXT6rVOFDlMNG4oyEaTG70dbceF-OXTlq1VGMcm-iWpX7geORmbuBcEfq8GfcHSxVxVIvt1R2FD1585XHGKgZJJCmYvzTuE2PjVjSnIYpMy8cPl1xS7uL2ZdoTNzfd2zae0hdRPRUI8llcz2m485HLFpi5oLIhPF99wHF9TogeJuhhgxW9cHMXnsLw5CMuMbefgaK1dpHQyAgn-4ATt8s2QbxJ-Jf-OYHIeoV9w5b0kiK6CcZtaO7XeH-BcpLWafGHvgz5Qd_oitN_TmGV_4kVeETd78dUUzZKQTQqP7g-pSK1vGbWYfF3DNNNkND3_2CJ3GTkmF6MidbSffm67Zjiq35BtQe4mLOi0DDl7UVgM5HnZhD3E3VDm3FuDnbZvvB1aMQFDUEU1A9_Q-X_9GpFHaI1_C_lizUMmTiC2fjtVwukdiMAU5ITYhbLhXVb9Q-Xby2uppc-e_KqYRs7j8t2qH68JYbkKuC_OMchEWcoJDv7EvALyVr2dAXdRqpCpR2sLWdYZobjYSlE7_rgx4FUfjdvOroGn6zPxcn-mnxJ3CN-NKaNlMiDZp4c1rTbKRavTa26T1myW8Yi2XdJJXtw3HwpwW_bVWjG2YWytGKTyT9uS4SmjZtv9POwaUJANmpxxnI8l7Ytt18pDvv5_9qTJ7VQs0BBk5jRpxzAwuGu36rKXF88aDViXGUrFqSURFq0iFAi7iX6GH9lj8FpcNmVVry9zPLNayFapK6mZnAlfbBXhkU59IcT-UXPKwkBn-rOn58Q=w1908-h1275-no?authuser=0", "11.jpg", 1908, 1275, "Gold tint because why not"),

]

export const thursday = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/Jgv5Bo6F4-6SzyHGE8M5qjaY2YeCRy_CYRMxhM_qdESAJY3O4HxB6qByBp0AXfjvJ4BVxe78_pxGgOw6geB4ywJ4BTrPN_c_XSBvUiF62FYD5Mjw6KI0tdhrWpdWu1govnT5BZmKmvleocHoYKaUOA5seZZMdJXbPXKHN4yFl0a3MTEHrsW4nZ3DMlcZtQojEFyMg0SB38wlNEZa35cBZ0cVIMqWl3klEEsuWa6g40pvCZSsDnwl1l0nGqxuwx55g0EQaH4KmI5V7t_bveWL0amdgM6Vb7B3NgVt_YwexF4h4onj5caMa4J6ohCgcLlnkVYtB_hz2Byp00jVHdDC1kQ71FIHhCXkPGRYNj8cbX5eLIanokpFW0yNpONrt3sviLPLKLpvyHbwtYFUyfPJwZP-viNu72MqpkLD1CNWnqJzlJFBn4rjitQBvl1TIs4ogiv99s22ELePfdyrT5stH4PAjULnYZxFqwbY7MAGOImQB70n7qwYHaA2HpBMElcHKDUe7f3-QUr_Q2gkhtyZKNsVGxwW9ZftIQnWSqN8vpSlv9mjnST5Ck4KeQwdYrqnk01lGDZvrH9fY1iqy0q8Bp_GlK8u7uKDTPzSEvVQE0baLSWToQ7JmchQENYT1-kMiSh4dORaCjvVLFZPLzUyW_Tefv1JVAhDjtThA-24C86k_M5lkytzkOMGgGov7WpYHresFOm0-YCu_TRlCSBroiEs5ZOtSp0-6ZNUXwqvASSIBxQmLRmT_lfg-VwSgWr3YEAr_WUGAy2QffA9yJFvmfjwPexdwnERDXHYCtR5sUOnxDjFaqWbAf-mEq01iyFjh4n10g3m46-_X7E8khzP9I5bd8NuJS5R1eJs28PICX7fGNpF4csxpipbf7MDAC9RhKnH37Fi3uNWOCYe1dNdKO4OnsUMwwtQV0X3PNXLjjMWjA=w1913-h1275-no?authuser=0", "12.jpg", 1913, 1275, "Using a light blue backlight"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/iYQSDcWj-RADUtlDsSpplvDQBYQdEktLVT8vS3Vn6cz_y-UQurCFnBErC8zFIiFgeGc39wx0-AOUuKr0sl6nIbpZIZZZyon9337MkOUUnlmQgtAimYAjYYGv8M0gWdmV6aaVOCCiy6OtfzC3JBArglTohSDdFj3H3uLvXOuMlSl02J_ad_rvs_fUi1vMCnIPC66f597FqRx3EL8fqJB6ePThDxf6sVelfUAkVXvpNDWThYixjfEqECqzTlXFa8K3NEQQhX2bvI8PHvYMGQYfzAzekeX2BdUdHWNQgiMRHLrSgsI7CkVJyX2agSuF8WuZwRIWvStYcsGs_eFe_ITLP1_bJoGdCMP3xI_McYC6Vre7LLmvHuAen1u74Iz5i1XRb13lY4E09PB03CCnM5Iarg2TxJx_yc0JixDwE33362KD27KJiowOKW8cibQOtIuoqFjlITIJPgd9GwXRS2Cn8p_BSDB9hLN9rbcjnCJ7CJEHb3C4Tda7-cwfQSyVEuwUFFqtNFte0cTkelfgnpiOTrZHiWaWXiDXi5OT2BY3lDIPyyLjAjkcv7MMfaKW3su2l-yymL5GUvQAS7BylKZwPBa_wX2qnMbecfLE1VvaJerQdPbFaA_5iNz1F1C817agpefYH56Q-npTTLbfFIi8XdTOwHZdq_dIS-YSt_iybBy8stKMF0Z4PGA0fUnDubf1poPtnk7iT2f1Qap-v2fCZ52-Kb28AWHqNwAj1YthDfdMEgvvd2dfEOi3rNAau9ZUZUXGLx9YkLzArx40l27NP6RrD4nlQgW5fv4hS5oxWCuU5ClzxII9kIH5ppOU7hKaPHHz8rWRG-nVa9ggk0ah-zErDQS2qrMmqX1LjeN0hE7xwsaXSlGA7UaNimKeT0oCu4AwSuQupiJR9STLEtTXOoACMVvRzKa995RoUIIXcdxyXw=w1913-h1275-no?authuser=0", "13.jpg", 1913, 1275, "Using a darker blue backlight"),
]
export const newbacklight = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/xTaUw5rYLMOSe-1P9efVGoYolalAoJqEf6EUJqgUCzpGCMCuZCmzQ_XgGzrGLqvutSrao8h3aQOWnxAMRlZBmm5iU2VrSF1C5VUkfDEYA0bhT96hj-9I4kVA3TWz-tILlY1pSk_eEkK3PFonivY8gAN61jVmlsHOuNIoMU34WRaHL1TVd3SuDzrb7Xd6Hw4ZPzVq9FGZGC4rihuaiNDr5j6j1CED2YdYvbCu1gEgxoDaTYrafqZn6FGQC0FaaaJIgGyM3r-8Gf1fdBoDcl9Kh1G9S3ZXliW9UWplXha8erH6WynamejCoF5iBSjRWCSz_83vOTIrd4IjfFMct2hvtcRT3zdZgaDOEA-JtLXe97DA2WAcEPsp1Mieig0rKUWIHwUoIOLgz6lVoh6ckQYVvGrZ3o9XQgOBMODbV7eG7HGuNcQfoIXiy4m3rdtsQrmhDBbY1DPxn2d8MGODWxYIza_W8v6TVkI4fqE1N-hdE0Xphrdq5h_4O7gWuEv8BoFb8M4vkWgra6HurxA7YsyoCRbGK3JJMZng07DDY6DrumuLqhXdlH8SE_7Fl12qyl2J2sqHiWLPleaCWaZp7Yn5GZnyKY1N2c-iXgEvcx30_jewTl7zpPFLZwuK6sfkrHAkeb4vk2ny89aenq3NvEkvLdDK7ba_bOtriurj3JpIEz1jrF_NdBG_5tQfxd_4T9Vc0o8NK1_iIm0_9mqndmP-fO6DaC1enL-r1j0dOfNR8ieFVz13AQN8eggO4KcogiSm45CJSo-8v67KD6G2ufzSpMTSaB1BFqstSukJkkZv_6UMycn3xfeqtyhO8pSwHJgIPExwGRLuyqV69-dyLJGvUQjjLlusbPJVIn-oEO1UKLN5GG2-tPx7NrA0Zh1JU4QSCT-CUzCabJ7_MhK4_KUgROR38tb3S8p2TGT1eIlZ32xDLg=w1908-h1275-no?authuser=0", "14.jpg", 1908, 1275, "First scan using non expired negatives with the hood and 95 CRI backlight"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/Z1w9qvcr-2RIuMEdtx5CkaGWprKZ0DzrBTNaecLnbWjJmwDC0MqkHmRvuUrTnb0suZRj85zbvQGXtnm6oG0rSda4nriszednWefM6nzmb-ys4lopDwnv-o3denuekeNI--xcefZ6P1Fn5aOUZJmgA0zGQK1K29wlm3WqpLpPFWe_rOLh6FkPqUWnUpGKh-usLtnfeHWyuoU214IH_wKvAzZ4sdq3kmtXnrYzbqgP7baKbH1lKKA_AczCqS3xiRAr5T34ceiL3OJGucxb21XPzJ5eadkaGzMQq7OoAXXStHSZgFW_MivGEPGLwQ9jM36heLWkWddRwxgjj6LmoERMs2hHLeb7IFx4pTgnysVoihT9fy7sF2R3F4m3ndH40M0LB8YxAQZX2n3IjLRBN2BwaCAsVleg7yZ85xDJd1nCPMkOnA3RwXkQDO1P6UfeXXuXbrsQ7MiOQYUsszivUxck2rHwQ--m7sAOo84IgAZc9BqPNMREWSjPns3Z9T9GAwezX0ENUMtraH0jU6R3iWS-Tj2h1cqmS1RIM8AT88vyOuXzNaISCdQw4QluqUhPb4OA9eKMbTQRHaDJ9DtejkDhmSN4OHK5mCiFGHmmm-8ZbrAe9bUP4V3LCBv0i9R7awP9FfTDIg_KmSA2EDRx8tCbqV5b4u6oFR3-V-efWjLPyD5o22hrY8ozvbXy-yi07GqR8TODKdrxWfLP68bFFnYBWMAFjcd-HrG1s3HBt5_QMTA-F7eaccGr0fHdqtX2AqYwlpOmE36OiDDIgpCiislxaUjfbAgcOmjzfpiXgvbKxwrwZh2VHxVkg_U8Z6JGO_bksd51dKshJHgzrPHl1t4kI0D3_5_8U-rWqH2B4PN95Ao4sTehodS6_g-XjWoofGDuXnERp4r5ruMjSPcsL0kzpflqB5yNWSZdVV3qZzPWV0KkAA=w1908-h1275-no?authuser=0", "15.jpg", 1908, 1275, "Additional processing to try to get the store look"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/ErnAdrT6NzlPeOSps6PbWkDtATBl2GbZm6mDcxDY_Ex17mk0oV1Qxw9ilKrwZsQ_LrYpKTKZKCqs2j5zet4PwYw2DzaHkOuekrQqvOeVYrWOR18JhLG1NmCcITOTLQqCUNEsSIT1PdkpwTi08fd495tTN0QecD8nVOeic96vdYNvaFMgdHs_lrD2AJbbqS-SgD1dCI6_fMNK6FIHcCcx2wXPBkcV-OL1_H6t0Z74u9NNYcO2YoDP10G24S8QhrsleyYoGZ8y16Gi53tdCh3ChJE4_Jls2p5OP79xp8iV-7YRGEKlpGu3AUs7EigWrZGUErdPUTS51NicRFehei2D8rAD-N-X6pBTc6UC9QfcWST9lNpJmBL5Ahi-cRBi3GPaOLrsRzNxBLxb437mqH0DeOXMaqKSfvTZk66x70d_U1I5lnMnKE7Lf8LNYq2kaicZUCw0o0AxWGwim3Knf8YqL3scPZyl_laWfOLp_o5LMHIdwEimhhGfofxiu24t9ocbtxOZwEyXG7KMhTzZdOjoJkQ__Q7Tg47yIiR9mVXKQ4mb-g4y7gaTfervcQClqTEPXO7TJAlF68aLc65bXcxHe_0NieUur8L8EU7ZPGBz-9uR9y2bjekZ9osVjib5Hs_tKz0FwCEJKSM-4JDkN0gjVrCUoKOYgjmtxu_s1nkBFVsfIdfdXQENdyc7mNXHvzKxe3k3vGZK3XlODZbaSWCSiULjMNMYMtArajpqZsKeVMnDnYZEDNCaCI83ExBhMx6Dpi4d_LoCi8-Fxne9VjPGHVwxYUEEkiKzsf8Yg5MdsA7j2LfSHeHoq8qVKcMFGp0G3sBlDr5qbkHczBukYq2q4bjqPuYpApjrRO2VY9Zq_NGAFC6cxVXNSwQwS83XRC1hoTB8xotw38ZTB0QlKntxb95os_A0LpJzCl4BdV3Pntr0JA=w1908-h1275-no?authuser=0", "16.jpg", 1908, 1275, "More extreme processing"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/G0km0fdpJU9h_V8B1nzWKJeoD45gGhT0Q7PUF11mhDp3AdMZjZHo6BwNTWCc6t9TFgo1_PkQ9g9Sjtu0GEDCgx4huXwNp9fXAVZ3TQPMzIfJcWlRiCz3kpadG5w2pyVA-LmMYSYmyJhVc3BH_TGy2TVkZ9Ia9GU5bZRMKstucpCwb0ilMSL-6YrVrpilf8sj_lt7KAO7Lm2F4__OGKe4B6csLM8hAxYEL4aIyrLHsPh5bSy7rRR9Gcg4RqMOZeQxDm0a5JCNq-LONVuQdnxrdMbLDuqdqp0pcjLD-HUHb7cCKgtWxaACqs-nzN6xOS-VoJiMMW0r6RXRHltNL3CcLOyAb2zfSyKrB-N22Boms3x8k3xG60TpQ2o3FViGgp_NEkI2LGQYFtVxjm3OWl8lLLWjhCuRnafKLsPpX_KtOMSuOzxPElKYGPOPRJ_RRx7_3SCYZWvlWz9V-REmZcPrVBAGezc2wlHKMl8c3_09Bk0o0At9pKnHoa2QzplChTGdELwvasZWuSfgHzNs_srM24f325psz1Pv1rDavM7qF28EEFADPyuKOrKwpViRglmBM6QkxMxou_IL4qLF0RqvMjOmwTb4fBs0TbhBnyjVbLCSGgtAwEGE0T8h2Pn6hUP81pX8Kl_kz2vOzXNw-9PubakWHuhyby2q62F31tBp_Fs4t2MQixqZ-_1Nqz7F9LPO0_Uq5pMVsaRzwJUGftGFKkT_XkVB6uSjug8D_c9jToq78gw9kE9nw494K-3EqN9AEyTpBeT2IThPtO_isF5A4FYqJfET66vr6WJ1q0T7BsNAhJE4Wg6LsJ6L9xdveE10ux2thhDAeBF-rSM3TuUUZIhjKUJe4Feell3vZ_Sj5h6kneAec4JKkwxjtY9QsbhHEcERbGU6oVNeqcfHGCNZ0savGQN2rqFcZXf4qjxSsHRK5w=w1908-h1275-no?authuser=0", "17.jpg", 1908, 1275, "Another non expired scan"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/uvLcDla2ECypE4n5kTsu5ECpLN5db1ekU3KDj62TYsO39IWN6zeIZ0bWgbTCkZJB-tWfFRv1WndIaS0sw6Z7PhK1VsgjD3OuhzKoofGW5Aek17cliZIKpYMKG9lhcVZV0XzzJK1zQaMnFzQdcSVwsiV967wy1HsVCJIhb1SbpZj-mDhDmZLqCS814yb13zYDjrMMjpWNdQ5Q-gytlXyQNBBrc25sms8UyqQvB6yFLAzMEIKa99_BjrtaE7vnY2F-TH5zUmBKSGUR9u-L3r1-0lvwFtPkeReFaRPKr74XArpVZ_Bwy8QbphD0ecCUJsbJj1taGxUHCAXc2GTUeYru5LKrZl3QIX2T3_vDxAg8s2pBGI6bJ8W2hbfJ2EjXG2CUSZU1tG0aQHJiDhkvkQQqQa9pkwyvivNxqVgNRRk4Yj2VenCzHRj3qGW4P2BxLc-RpsresVAF-rAViAFlYK6J-Qg8n1Kye1gjc-yctBoLkEnoRU5VMzULZcYuZEdTvFaVAcfWD4BeRU6p5a8reIKQ5_DHDWtNdqamIYJ4miPGey_lUfBxergipwWMZY_GwYMj_zoLJKTHRJqOeBlz-jkY-skZ7QjKDbPHaF8UEzWW-juhS3_umQIf8J3aZpheTq8m5XYCjG2g6Du7GtuyinYDvpMGZJI8mBg0zI0O2C7r6t4YhUB1yFGllZJP3-aSlAtHRHG8JX5oThzqyDGr4HmMI65FBgwIwnbVYD9KrnynNoTvP9mXYZe-UoqCiVn06VJTc1tYmXTyNMkP0XvFPvJjXMQMP453F-NrIoCP7sv25KaDVZ736wwxcZkZL8FMwcYhPctU36OaqSnQyX_pbn7NgSdJVSPK8Njvc-eUzSKaaKkdKSh6rDb7vhnW8v1bIPZLWWcD-NGdzibXJlB948Hwc_T09k2teLdCr5hpUgDd_pofbw=w1908-h1275-no?authuser=0", "18.jpg", 1908, 1275, "An attempt to correct towards store look"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/jAkt5kTsgvWgviQ8Nyk9uEN8NUjBPgFYLVqQJclUhnILia6oUe5iAxT-8cdRvcbQVnGAECp1F87PuFimjhUe7yDD-UDx9X9Oa98Dv2CPXQDeETNgVZ-wDWB_EFg-Yq39o6mH1A1lL-Nl3gcZNf5DFt8R5d8c6Amk_LrbE5sBsu1mM6lPVB0qPw7iE_HuJo8zBkWnm1ZuVJVLZq1nxI8O3JlgRGfjFoKM1NGA-rwOS2xv4-w-TEkseoqQTdJ8rMf3BPk27Txz2EosNPpdN6eEC2cFlmo-ie7PZ5n4HVzSTIeXPmwQ-CgNXCE58HIRRnzLLFPBmkibXc9y4xNqTlREABf9sGpFmdtFzynasPzFsRKduOQNOc9YNfAvWSWWphpZg4WhklYnR_7xQntFZEk-8HSYl9mrfYi42HNTTddJ1FHEZfeKpKtE1BCkc60B9AQAqqo691aDTLVfXsvZ-CM2ETpBPoiy8Mut78gwUpRDQTc4xkMX47nrRcAdu5RfnzMScv7X_U8ZyoYZjt7MX6YDH3VD5yjSlCA7M30pzqR2eRKuF5ghrveCV-gn9nng5J195CUtaChSuU6MU-xzwijsOVG2EB6WdNj0xaGRB7wC83O2PY0Fj93ck9Pe8JGzO3_hrdIScEF2pD06wA3cWMcsy8zKObx_L7UrNzYwN9bPtT3qxuyfGFUdy4u5vCKfvQ3-4i0ZMJ-kig90QzOF75EQaRM49t5EAYFKBoh9ZAXJyHliWt6zGkjOiO7KqU-Zk1WNO9Vt0b9qcQttovHQ6EnLx2H7XQKL63qrkyvAfQTSAUl0SbP6oW-P_vWtuhC02HY2Hx3kHSRivCNjwE-EuICjHXcaIhnT7z1-I3vb9aygP9YPJmE8NqNKEDJy6OJ0WZcxHuBi3HV0afHwtcYUlERWkjIeehNg9dMg3lh0-64uraxtgw=w1546-h1275-no?authuser=0", "19.jpg", 1545, 1275, "A cropped scan on my Sony 16-50 kit lens to sanity check that the Takumar tint wasn't doing irreversible damage to the colors"),

]
export const photoshop = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/oLFCcvdxHEL2RNFCrCcasMRNSSNWj8RVu-pnLpjCVGZ0bNJaFNJKqBGbDpoP3N199Uykv0nL9taxUGl_7QIQbu3V030tlAH2IfCzG7XYMSeW4kWXpWQcxw3i8eEHWm-tqI0Eokm1T5w_tWYz2krYeypU-VoHs6SmE6V7LKv9LcxzU597CZ6wVKvkN_-hVLmgoIwaP51BtZ0raJ67yENQ4JqiUeWUAfWNOxd4fltsaxqTJotl2dsfwRqYAuKULCG-700GBVy-jIdrB7VcAEtgIn0gdjxPiKJnwAjRhyLBYc7d_Z2Hp5VWAsVrxR9ua7aguhRysX2mFOU_vbJqzJwlYOYBjOfQDUnbCSX5CSpSwhkYtcl2qc8g7Q1P6fNI-cfu42Cu_dIV3FbYBl19LkZwv6U2WCkBhDINfQ9R8tbgXO4Y3n4l49MCjBDCChnhVZC7brv-3kcvkJSsPukGT2c3Hq4mnk6FyFyf8Y437TDkUosyMBvmAjTQeQE1MjHwRu3seBKQcjx1HddO_PUr-85U2M5ETV7Rrz2YqH4txcQ2yaxRqV6GHV8CrP-AddQ8RPq8b95vqBLeiQmsnjJaPbwhdvndbdvvQBcFtDsu2pSJMeCi294agcawzjCJWzlcmqQWTSOIdcDHCOicbxs0YeMdVlToOIXIzXg90tBFZMkQccrcU85CURxxiaRTVE9ZMtNzaRrNiGtF2XeMaergj7fptu1HZvqaOu-WEFF5rR9lUrFFDtYr23kE2oLFJYZokeFYJ9p8-VFsOocHQ49hbp-bCruQh-jMlWeD3z3O6CMY-btcWrB3isHsIs-s1BW2g7XyJkPKiF-5z_7CfYqDZwgHnCui9Upi4qpr9BPrxI5ZWYSUBxf-02vrAmq71JgelLtUhrOTnO0edU88W4ePoLtrh3rkUO-0X8aBbTTDHF1KLaAboA=w1913-h1275-no?authuser=0", "20.jpg", 1913, 1275, "First attempt in photoshop"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/VYgw_ZdrnChfv43XTBntP3WpB6DfudCs2gfSqHPlaub3bjRzUV2OEl5vLQVmjmB6NQAMXzNY93D6chpDYNuVUBoQxoZopUMXhSPopVTGmVccqLZQ4smBJ7SvjpMi6xy__VmwCkpkzrq5P7nGnX9LQTUBTC7eapNHZigh64UW2Nnkub4-VoLGs9Tshg33EuToJ013VZO3otlTg0ASNzI1wUkH0QydR89ojFfjB0Fu1DBPss0hnowZlc468xnanHvu-3CKax3Yx7AqzmgfKLo5xZe6lQYi1lkS--96U3vujA4u1FBeFlgMYDMnPposBXfCeH6WlNCf4nATNux-U5xWT8kqd3kjYeCiUBDECZEq3lvE3vStsUCep99ms93LT-fQ58EbBuLq2ZPZBz5Kg0P47RNlR-6Dw6JnqS4H0zdiaZ7e7j9yfMBnRR4ZiaeRHfU8Gz0RCUbj4So8ZJm2lHS1wUPa101PjOSat_rqbTJai4mGyolgzdriRpUAXyEAalvDZ_7zYcSpc0pRvgdvgmw00-rYDyEYs-FQmvr0syf5dfQlWCi9_V0F9hZkaroy3NGd4nj-NE5T2AgYq0e7u6KG58RRX8nNmbTqzBz3OxrZz0VZ167qbXGei_4Ju3LpIOIz-b3xjD28T1hHVzhRDzL4oVlemR5eMG1_IXu9uVIWWruJEfWX1ygPfO8I28k5FTxDUqi64gAvfEZlGRnqDsSVQ_puWXtts-RRnKWh9TlzldIFPlrXI2kIpKyfAbuJo3veoE-UElS7TlArNYiaAmL6aoQVu_4HVgASv0g3VgKdlvVPkgH17u0pZetrOM65t1Wtg1DzHCGNUAOauoM54O7Q2vVIDBT0-l8LcenedjT6-S_2A4OrYL1LfqzjnBuEHs0tyzwkXZm9onMBFQZl4FFJOVbMIonJhj3dMmQxzpqD8dyWvA=w1913-h1275-no?authuser=0", "21.jpg", 1913, 1275, "Second attempt in photoshop"),
  image("images/filmscanner", "https://lh3.googleusercontent.com/lH1iJjB5oTy-MV994BAGwg7Fbhn-UZlDhPh5h8YmQoxDD6rOrITIxFXhvgfIt9bWG49cG6pZayoJoCfLw4ci3ESbKR1zwTelnIWzNOPHkBKEkl-Uo53cxklsqqW6z0raP2PnmQSkkgIiRyeiAbZAkWrqTEszrp9QC0oaOs5Zgdixx9wBmPRoshYMGMMiooB3_GapntKI_Zcf5rNBpw-PN-6P20ToGrpTgWJ8uBxsjxQTgCDSfQO88sRLa40p_ZxCcacMOb9pfbGvXrHbLRZZaYaIx3QfAe5-cblZb3SpzBEsDCd8ntybYKb3frBDlo2N76F-JFRO8YNqtL65Nmv8im0w1TD_V01G-TwFvYLLj7A-BbCWSh1xzfXDL-hcvXZqmy9q4wozEz_-jaBCUSljA290hGWGWbGrj9-nVBPyHEtrZoEguRFgr3Wv_jmpPzUuDeTUWZNhU75PQHAntm3CoK0dbL5yFvR3IYkjaiPSaOUfUE2P0OuvPHLDHR2BtR-h2fU4PStqxro5B32iVMin5zj6yagzRIw9vV4Pvj0lIcEw3kBalPtJ03mMeoCnslkido5yKZUUSm6X83dtKgM4JUlraV-huFJQTrRngaY7Wd1TMGbZLDaTKGo4lEkGsW8TX13cZcjQYtCpsn6mTHAs7TVdOkJE49f-PdVlLCyhnbQv9s0PNqw33pZyUFzQxUeTrfkIyPWxyQxszZgKGNwUxzhJrZ46-_5eLfyNCTBLnUXOG2qZ1pfk6I5rqwBPXMiNfizlqyLvbcE0PRGRcxk38mg1CQ8-NmBzd9VL8-_FzncR9lFcG2_OjciLORPHrJ1Ml2UldZyaFcLQ64kpdq8CLj6TAG6Yg_g-RSrNhNOb3WO38xch7YRARWt9XsaX8iv7QZFENdcSORiCAYFDDQHX0RRGMaW4JLc06JKnIMzDZE6GrA=w1913-h1275-no?authuser=0", "22.jpg", 1913, 1275, "Third attempt in photoshop"),
  
]

export const storescans = [
  image("images/filmscanner", "https://lh3.googleusercontent.com/pw/AL9nZEXeNjGRpmpp8jDwQOQQAxev4uA8_3CaFIa4Jpd4yjQTN8Uge6anjZ9GxAWuGTRvVsxjnD2UP7VVGCZzFKRxhSNUYYCtfCaDEhlTfVxYd6DiU2McEIdYsidG3l5ehnK-WzriDt5UP3SRGXQtp2PjJJLbaA=w1924-h1275-no?authuser=0,", "23.jpg", 1924, 1275, ""),
  image("images/filmscanner", "https://lh3.googleusercontent.com/pw/AL9nZEXZi0L9jOPaDUN-fnwvkYkCk37VY22DVwbvpYjsToGO80-k0DwSH9-fNHomNSR3Tqgxpm7MkREL7E4AO_nY9TFmIQUI_uV7uB7HgXHiq8dgB1HnM5DQUqkGUBpBX5aSWWt0acEjUyiwaHXyRKDA5jyqGg=w1924-h1275-no?authuser=0,", "24.jpg", 1924, 1275, ""),
  image("photography/filmrolls", "https://lh3.googleusercontent.com/pw/AL9nZEXoHHQ7lwqrcMXYvwpZ7FcfR3VrXGq8zomOQq2R1ZdLmCkOflEdspZjEv7LN7qHmYdzrEH5nyFPj4u48GkvzTDHRYGSd9Gnpgns6ZIT6GMZr0S4FOWffXB3iXZVI_O3qqXzJJbUnF0AcleyiTIbNclMhg=w1471-h975-no?authuser=0", "14.jpg", 1471, 975, ""),
  image("photography/filmrolls", "https://lh3.googleusercontent.com/pw/AL9nZEXLxu6XsBjj-N0tgJgrSajQSmlY3-y5ShI_EsZ4OAJsgRPy53lZY5kzaeJttkzYzTHPsCzFjAlCp5uewpav4i3pwSpQJSiIyJPNMtjriRUPnqHwWhXo0mrDzfDRCK21L_BY3ozDHY_mB6cZimvJALJhHA=w1471-h975-no?authuser=0", "15.jpg", 1471, 975, ""),
]

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
      <p>
        This was a one week sprint project in December of senior year. CAD files are available <a href="https://www.thingiverse.com/thing:5707027" target="_blank">here</a>&nbsp;if you also happen to have a Sony a6000 and Super Takumar 50mm
      </p>
      <p>
        I have been getting my film rolls developed and scanned at a local camera store, for $16 total ($8 for developing C41, and $8 for scanning to a USB drive). On Sunday, Amazon recommended me a 60mm 7artisans 1:1 magnification macro lens
        for Sony E mount. Immediately the thought that popped into my head was film scanning. The 7artisans lens was $190, which was pretty cheap for an E mount but not quite justifiable for something I would pretty much only use for film scanning, so I did more research into macro photography.
        I discovered macro extensions and bellows attachments to get a shorter minimum focus distance and therefore greater magnification on a normal lens.
        I had a couple manual M42 lenses that I could try: a Super Takumar 135mm f3.5, and a Super Takumar 50mm f1.4. I used <a href="https://www.kielia.de/photography/calculator/" target="_blank">this calculator</a>&nbsp; to calculate the required extension length for 1:1.54 or so magnification 
        to scan a 35mm frame with a Sony APSC sensor. 
        The 135mm has no tint, which is ideal, but would require a ludicrously long 100mm extension in order to get the required magnification ratio. The Super Takumar only needed 24.5mm of extension to reach that magnification. So I chose the fast fifty.
      </p>
      <h3>
        An aside about how you <i>should</i> do this
      </h3>
      <p>
        DSLR scanning is already the janker method of scanning in film, but using extensions on a normal lens is even more jank. Dedicated macro lenses are the best for this purpose, followed by enlarging lenses, followed by normal lenses with extensions. 
      </p>
      <p>  
        Why?
        Normal lenses are not designed to be mounted to extensions, so by adding extensions you make the effective aperture smaller, amplify any imperfections like aberrations, and introduce potential for color imperfections. Enlarging lenses are slightly better,
        because they were designed to be used to blow up 35mm film onto prints, so they have little to no aberrations, sharp optics, and near perfect rectilinear projection (few distortions). However, using them in this context is still not ideal, as they
        are mostly intended for 8:1 to 12:1 magnification, not the near 1:1 that DSLR scanning calls for. Still, a Nikkor 50mm f2.8 enlarger goes for about $50, so they are pretty cheap and should get the job done better than normal extended lenses.
      </p>
      <h3>Monday</h3>
      <p>
        Monday came around, and I stopped by the Robotics lab to 3D print a 24.5mm extension and pick it up in 7th period. The first layer got messed up, so I couldn't screw it all the way onto the M42 mount, but it did work as a macro extension, and I did take a couple
        photos with it with my Sony and my Pentax. 
      </p>
      <center>
        <img src="/images/filmscanner/pentax.jpg"/>
        Mounted on the pentax
        <img src="/images/filmscanner/sample.JPG"/>
        Sample image with my Sony a6000
      </center>
      <p>
        I also tried a couple film scans using my desk lamp as a backlight. I used darktable's built in negadoctor function, which handles much of the color inversion process on its own, including subtracting the color of the film base, and dealing with dynamic range.
      </p>
      <center>
        <img src="/images/filmscanner/lamp.jpg"/>
      </center>
      {gallery(lampsample)}
      <p>
        The lamp was nearly the perfect size for 35mm film, but had major dimming near the edges, which is why all the scans ended up brighter along the top and bottom (following color inversion). The concept had been proven, but it was clear I would need a better light source
        and a setup that kept the film in plane with the sensor for focusing. I got to work on designing a hood to keep outside light out and keep the film in plane.
      </p>
      <h3>Tuesday</h3>
      <p>
        On Tuesday, I finished up my design and 3D printed it again in the Robotics lab. I also printed another macro extension, this time with good threads and a thicker outer diameter to make it look better. I brought some expired negatives I didn't care about damaging, and 
        stayed after school working on my design at a CubeSat meeting, laser cutting a bottom plate and messing around with macro photography at 50mm. The design used three laser cut plywood bottom sheets layered on top of each other, and a 3D printed mount for the camera 
        (via a peakdesign plate) and the hood (via two M5 bolts). I made sure to make the M5 mounting holes slots so that I could adjust the film forward or back to be in focus. I had measured the focusing distance to 21cm or so (as listed by that online lens magnification calculator) 
        but there was a decent chance it would be off, especially considering the millimeter-level depth of field that the macro extensions yielded.
      </p>
      <center>
        <img src="/images/filmscanner/hood1.jpg"/>
        <img src="/images/filmscanner/hood2.jpg"/>
        Remember that focus distance is measured from the sensor, not the lens
      </center>
      <p>
        The scans from this were better focused, but the lighting issues persisted because of the poor backlight. It was at this point that I decided to order an LED panel with claimed &gt;95 Color Rendering Index (CRI).
      </p>
      {gallery(firsthood)}
      <h3>Wednesday</h3>
      <p>
        On Wednesday, I brought in my negatives again, and attempted some more scanning and editing. My friend Aarush suggested that I use my phone as a backlight, as phone displays tend to have pretty good color rendering.
      </p>
      {gallery(phonebacklight)}
      <p>
        At this point, I started getting concerned about color rendering. The scans were turning out pretty blue, and part of this is a natural part of film scanning, but my Takumar lens was also contributing to it. The 50mm Takumar is a radioactive lens with a goldish tint, which 
        translates to a blue hue after the colors are inverted. I spent a long time playing around in darktable, and seeing if I could set camera white balance to reverse the Tak tint. 
      </p>
      <h3>Thursday</h3>
      <p>
        Thursday was much the same as Wedesnday, except this time I 3D printed a film holder instead of sliding film between two pieces of 3M VHB tape so that I wouldn't have to take the hood cap piece off whenever I wanted to load film. I continued to try to reverse Tak tint on expired negatives,
        not wanting to risk damaging my non expired Ektar negatives until I had a good method down. I also played around with using bluer backlights. It was beginning to dawn on me that negadoctor removes most variations in white balance and tint by allowing you to sample a section of the image
        as the film stock color, so the Tak tint shouldn't matter.
      </p>
      <center>
        <img src="/images/filmscanner/filmholder.jpg"/>
      </center>
      {gallery(thursday)}
      <h3>Friday</h3>
      <p>
        On Friday, I received my 95 CRI backlight and mounted it to the setup with a 3D printed attachment that I glued to the plywood. The images were about the same as with my phone backlight, but the new backlight has the option for higher brightness and more temperature adjustment.
        I finally gave up on expired negatives and decided to take out my Ektars, and these were FAR easier to work with. 
        I found that applying negadoctor settings and then adjusting white balance until colors matched worked well. I also took a scan with my Sony 16-50 kit lens, 
        which was heavily cropped because I didn't have macro extensions for E mount, just to test whether the Tak tint was actually causing color issues. I applied the same negadoctor and white balance processes, and the image came out almost identical, so the Tak is fine. 
      </p>
      <center>
        <img src="/images/filmscanner/backlight.jpg"/>
      </center>
      {gallery(newbacklight)}
      <h3>Saturday</h3>
      <p>
        On Saturday, I found two helpful videos by Alex Burke on <a href="https://www.youtube.com/watch?v=ylIyA6wQGcY" target="_blank">basic color inversion</a>&nbsp;for film scans in Photoshop, and <a href="https://www.youtube.com/watch?v=urw5x03c9gs" target="_blank">more advanced techniques</a>&nbsp;
        when basic color references aren't present. I got a 7 day trial of Adobe Creative Cloud just to try this out, and the results were pretty similar. But I was impressed by how easy Photoshop made the manual process, compared to darktable's relatively clunky UI. I was working to try to match the colors 
        in the scans I got from the store, but I just couldn't get that "filmy" quality. When I took a step back and looked at my scans on their own though, they were still pretty nice.
      </p>
      {gallery(photoshop)}
      <p>
        The store scans for reference:
      </p>
      {gallery(storescans)}
      <h3>The Final Procedure</h3>
      <li>Set backlight to 5600K and 100% brightness</li>
      <li>Set camera to base ISO, and aperture F8</li>
      <li>Insert film into holder, slide into hood. Wear gloves to avoid leaving fingerprints on the film</li>
      <li>Using a representative frame, set focus (in my case between 0.55m and 0.6m on the lens)</li>
      <li>Set shutter speed so that you expose to the right to maximize range (histogram should be just to the right of center, but not too far right so as to not clip highlights)</li>
      <li>Take photos of each frame using the same exposure settings for ease of correction</li>

      <p>
        From here, there is a choice between darktable and Photoshop. Photoshop is much more manual and deliberate, forcing you to make decisions about individual colors and hues, while darktable allows much faster edits and a much more standardized process through the negadoctor feature.
      </p>
      <h4>Using darktable</h4>
      <li>Load the RAW files into darktable</li>
      <li>For each RAW file, disable default adjustments like filmic RGB, sharpen, and highlight reconstruction</li>
      <li>Enable negadoctor, use the eyedropper tool to sample a non exposed part of the negative as the film stock color</li>
      <li>Decrease the dynamic range of the film until the exposure looks good (for me it's usually between 0.6 and 1.0 depending)</li>
      <li>Go to white balance, adjust white balance until the colors look right. Generally, blue needs to be increased (to decrease blue after inversion), and red can be decreased by a bit</li>
      <h4>Using Photoshop</h4>
      The videos linked above go into quite a bit of detail on the procedure, but here is an abridged version:
      <li>Load the RAW file into Photoshop</li>
      <li>Add a curve layer, perform a simple invert by dragging the left up and the right down</li>
      <li>Sample the color of the non exposed film stock using the eyedropper, create a new filled layer, subtract with less than 80% opacity to maintain shadows (sometimes as low is 50% is needed for poorly exposed shots)</li>
      <li>Add another curve layer, and in each individual color channel drag to the left until you are just about to clip the highlights</li>
      <li>Correct colors by creating a point on each spline and dragging up or down. Blue needs to be dragged down the most, then green a little bit, and red can be dragged up a bit if needed. Use known objects as color references</li>
      <li>Add a hue/saturation layer, and adjust individual color hue/saturation/brightness until colors like the sky are correct. I find that I usually need to adjust blue to be a lighter hue and lower saturation. Don't overdo it, because it will be noticeable past a point</li>

      <p>
        I'm still working on my Photoshopping skills, but it does seem much more promising than darktable in terms of control.
      </p>
      <h3>Future improvements</h3>
      The plywood is a bit of a jank solution, so I may try to use some 2020 aluminum extrusion instead for the base, to give it more rigidity and keep it straighter. I also should design a better way of adjusting the camera's view of the frame up, down, left, and right.
      <h3>Shoutout</h3>
      <p>
        Thanks to my boi Aarush Sivanesan for helping debug, giving me tips on lighting, and providing feedback on my scans
      </p>
      <center>
        <img src="/images/filmscanner/shoutout.png"/>
      </center>

      <p>
        Last updated 12 Dec 2022
      </p>
    </Layout>

  )
}
