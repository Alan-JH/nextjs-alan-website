import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import { centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'

const title = "Radio Encoding Protocol for TJREVERB"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container} bgimage="/images/headers/buildsheader.jpg" pagetitle={title} headertextcolor="white">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/projects">
        <a>Back to projects</a>
      </Link>
      <br></br>
      {centered_img_block("/images/reverb/flatsat.jpg")}
      <p>
        This is one of my proudest contributions to the TJREVERB project, even though it is something that probably happens in industry all the time. A couple months into the year,
        after we had decided to use Iridium as our primary radio, and had finally set up communications with a groundstation email, I realized that simply parsing data to string and
        encoding to ASCII was incredibly inefficient, so I designed a protocol to encode numerical data into byte floats, and information about the message such as date and command to
        as dense a header as possible. 
      </p>
      <h2>How does Iridium work</h2>
      <p>
        Iridium is a satellite phone company that operates a constellation of communications satellites in Low Earth Orbit. TJREVERB's official mission is to evaluate the viability of 
        using this network as a primary radio on a CubeSat. TJREVERB has a 9602N Short Burst Data (SBD) modem on board (referred to by Iridium as the Iridium Subscriber Unit (ISU)), 
        which sends and receives messages to the Iridium constellation. The constellation then communicates these messages to Iridium's groundstation, called the Gateway, using the 
        Gateway Subsystem (GSS). The gateway then sends and receives messages via email to our purely software groundstation. Each message transfer is full duplex, consisting of one 
        Mobile Originated (MO) and one Mobile Terminated (MT) message. Each MO and MT message has a respective Message Sequence Number (MSN) which increments by one at each message transfer.
        The flight computer, our Raspberry Pi, that communicates with the modem by UART is considered the Field Application (FA).
      </p>
      <center>
        <img layout="fill" src="/images/reverb/iridium_overview.png" loading="lazy"/>
      </center>
      <center>Image credit: Cubic-i Ltd.</center>
      <p>
        Iridium is advantageous primarily because it eliminates the need for us to operate a hardware groundstation. We simply send emails to the Iridium SBD service and receive data from the
        satellite back in emails from the service. Iridium also implements its own handshaking and checksum protocols, so we don't have to worry about making sure we have a contact window or making
        sure all the data in a packet was transmitted within that window. Finally, Iridium implements built in functions between the constellation and the modem for signal strength (CSQ), geolocation
        measured using dopper shift from constellation satellites, date and time of the constellation (measured in the number of 90ms intervals since the Iridium epoch, which as of now is 11 May 2014
        at 14:23:55 UTC), and ring alerts which indicate when an MT message is ready to be received from the constellation. This last feature was not used on TJREVERB, and we instead just polled the 
        constellation for any MT messages on defined intervals.
      </p>
      <h2>The Protocol</h2>
      <p>
        TJREVERB's behavior is mostly dependent on ground commands. Most messages returned from the satellite will be in response to commands from the ground, with a few exceptions. All commands to the
        satellite will result in a return message, except for the power reset command. Commands are defined in the command registry and classified by three letter strings. The command message format is as follows:
      </p>
      Command byte | args -&gt;
      <p>
        Commands are quite simple, with the first byte being the command being sent and the second and beyond being the arguments. Most commands take numerical data (see below for encoding protocol), but a couple commands
        take ASCII string data. For these, the argument bytes are decoded as ASCII characters in a string. One command, ARS, simulates the execution of another command, so the first argument byte is another command byte.
      </p>
      <p>
        The data return message format is much more complicated, and is as follows:
      </p>
      Settings byte | index byte | date msb | date lsb | [descriptor byte] | [msn msb | msn lsb] | data -&gt;
      <p>
        The settings byte indicates what type of message the packet is transmitting. The second LSB indicates whether the transmission is in response to a command (1) or unsolicited (0). The first LSB indicates
        whether the transmission is to be decoded numerically (1) or as an ASCII string (0). This byte also determines whether to decode the descriptor byte and MSN bytes. If the command is unsolicited, it will
        not include an MSN, because it is not in response to a ground command. If the command is unsolicited AND containing string data, it will not include a descriptor, because it is not in response to a defined
        command. Numerical unsolicited data will still have a descriptor to describe what kind of data is being returned. Unsolicited strings are typically satellite error messages.
      </p>
      <p>
        The index byte indicates the index of the packet if it was split, starting from zero and incrementing by one. Splitting packets is sometimes required to send down large volumes of data while staying within
        the 300 byte packet size limit of Iridium. This allows large data to be pieced back together on the ground
      </p>
      <p>
        The two byte date value indicates the date, hour, and minute UTC that the command was executed or message was produced. This is so that we know when certain data was collected, regardless of how long the command 
        sat in the command queue or how long the return message sat in the transmission queue waiting to be transmitted from the satellite. It is encoded byte wise as follows:
      </p>
      <p style={{fontFamily: 'Courier New'}}>
      0bDDDDDHHHHHMMMMMM
      </p>
      <p>
        Where D is date, H is hour, and M is minute. In other words, Timestamp = (date &lt;&lt; 11) | (hour &lt;&lt; 6) | (minute). An alternative would have been to mod a UTC timestamp and divide into minutes rather
        than seconds, but this would have been less convenient to decode and would have had less predictable rollover periods.
      </p>
      <p>
        Descriptor will only appear in numerical or response packets, and describes the data being sent, or the command which was issued to solicit the data. These are the same as the command byte in the command message
        format.
      </p>
      <p>
        MSN is a two byte number only present in response packets that coincides with the message sequence number of the message containing the command which prompted the data return. It is omitted from unsolicited 
        packets as they are not triggered by a command
      </p>
      <p>
        All bytes after the MSN byte are data bytes. Error and announcement messages are primarily encoded as ASCII. Unsolicited numerical is mainly used in proof of life beaconing, which includes statistics about 
        the mission. In the case of non numerical (ASCII) encoding, each of the data bytes will be decoded as a single ASCII character. Each character only corresponds to a single byte, so UTF-8 is not always supported. 
        In the case of numerical encoding, each number is represented as a 3 byte signed float, which allows for 5 significant figures of precision, with exponent from 10^-16 to 10^15.
      </p>
      <p style={{fontFamily: 'Courier New'}}>
        &nbsp;&nbsp;|exp||------coeff------|
        <br></br>
        0bSXXXXSXXXXXXXXXXXXXXXXXX
      </p>
      <li>The first five bits are the exponent, in twos complement format, meaning the values range from -16 to 15 (First bit is the sign bit)</li>
      <li>The last 19 bits are the coefficient, in twos complement format, meaning the values range from -262144 to 262144 (effectively -99999 to 99999 according to actual implementation) (Sixth bit is the sign bit)</li>

      <p>
        Coefficient is treated as a decimal between 0 and 10, so if the bytes read 356, they will be treated as 3.56. Numerical data is transmitted MSB First.
      </p>

      <h2>Implementation</h2>
      The full Iridium driver is available <a href="https://github.com/TJREVERB/pfs-rewrite/blob/flight-dev/Drivers/iridium.py" target="_blank">here</a>.
      <h3>Command Decode Implementation</h3>
      <center>
        <img layout="fill" src="/images/reverb/decode.png" loading="lazy"/>
      </center>
      <h3>Return Data Encode Implementation</h3>
      <center>
        <img layout="fill" src="/images/reverb/encode.png" loading="lazy"/>
      </center>

      <br></br>
      The encode and decode functions on groundstation are similar, but inverted.

      <p>
        Last updated 25 Nov 2022
      </p>

    </Layout>

  )
}
