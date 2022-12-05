import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "TJREVERB Battery Tester"

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
        <a href="https://github.com/TJREVERB/Battery-Test-Code" target="_blank">Github Repo</a>
      </p>
      <p>
        While we were completing the Safety Data Template and Bill of Materials for Nanoracks, they informed us that they needed our battery test data that Clydespace provided at time of manufacture,
        along with our own current testing. Since it had been five years since date of manufacture, we had to test the capacity of the battery to make sure it was still good for flight by charge 
        cycling it five times. If the actual capacity was over 80% of rated capacity, the life of the battery could be extended by one year, and if it was over 90% of rated capacity, 
        the life could be extended by two.
      </p>
      <h2>The Setup</h2>
      <p>
        I decided to just use the EPS and Raspberry Pi Zero flight computer already on the flatsat to control discharge. I disconnected all loads from the EPS except for the flight computer, and connected a constant
        current load to one of the 12V switched outputs on the EPS for consistent discharge current. I connected a power supply through a set of <a href="pcb-heater" target="_blank">PCB Heaters</a>&nbsp;
        that I used as power resistors to the solar input on the EPS for charging, and used a MOSFET controlled by a 5V switched output on the EPS to be able to control charging from the RPi. 
        It was a little bit jank, because there were multiple failure modes that could result in discharging the battery to the point where the flight computer shuts down and is unable to turn on charging again, 
        but the EPS protections would ensure that the battery would not discharge past the point of permanent damage, so we could always just charge the battery and retry again.
      </p>
      <center>
        <img src="/images/reverb/test-setup.jpg"/>
        Testing my setup with a spare EPS and Battery (that we weren't supposed to have haha)
        <img src="/images/reverb/flatsat.jpg"/>
        The flatsat around the time I ran the discharge test. Note the hotplates on the left, EPS + Battery stack inside the green box, MOSFETs on a breadboard behind the green box. Load is not powered.
      </center>
      <h2>The Code</h2>
      <p>
        The code was pretty simple, just switching between having the load on and the charging off and vice versa, with a period of 10 minutes of both off after charging is completed to see how the battery
        voltage holds after charging (per Nanoracks test regulation). I set the upper voltage threshold which indicated end of charge according to the EPS manual, and the lower voltage threshold which indicated
        end of discharge to 6.4V, a little bit above the 6.2V threshold at which the EPS would switch off all the outputs in order to prevent damage to the battery. I used battery telemetry to record the voltage 
        and current and to integrate capacity and energy of the battery. I logged all this data and a timestamp to a csv file, and printed the output of each cycle to terminal. If any exception was encountered,
        the code switched the load off and the charging back on to ensure that the flight software wouldn't hang in a state where the battery kept discharging (there was still the possible failure case where the 
        actual command connection to the EPS failed, which would make it impossible to switch load off and charging back on, but the worst that would happen would be having to charge the battery back up again manually).
      </p>
      <center>
        <img src="/images/reverb/batt-test-output.jpg"/>
        The output after three of the five cycles
        <img src="/images/reverb/batt-report.png"/>
        Jubilation
      </center>
    </Layout>

  )
}
