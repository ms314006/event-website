import Image from 'next/image'
import Shade from '../Shaded';
import SkillIconWrap from '../SkillIconWrap';
import title from '../../public/assets/title.png'
import eventName from '../../public/assets/eventName.png'
import styles from './introduction.module.css'

export default function Introduction() {
  const zIndexTop = { zIndex: 5 };
  return (
    <>
      <div className={styles.container}>
        <SkillIconWrap border>
          <Image src="./assets/css3.png" alt="css3" width={42} height={42} />
        </SkillIconWrap>
        <SkillIconWrap border position={{ left: '74%', top: 140 }}>
          <Image src="./assets/html5.png" alt="html5" width={42} height={42} />
        </SkillIconWrap>
        <SkillIconWrap border position={{ left: '85.5%', top: 40 }}>
          <Image src="./assets/xd.png" alt="xd" width={42} height={42} />
        </SkillIconWrap>
        <SkillIconWrap border position={{ left: '96.5%', top: 296 }}>
          <Image src="./assets/js.png" alt="js" width={42} height={42} />
        </SkillIconWrap>
        <SkillIconWrap border position={{ left: '12.5%', top: 300 }}>
          <Image src="./assets/figma.png" alt="js" width={42} height={42} />
        </SkillIconWrap>
        <Image
          src="./assets/dashed1.png"
          alt="dashed1"
          width={280}
          height={127}
          className={styles.absolute}
          style={{ left: '2%', top: 32 }}
        />
        <Image
          src="./assets/dashed2.png"
          alt="dashed2"
          width={119}
          height={62}
          className={styles.absolute}
          style={{ left: '77%', top: 110 }}
        />
        <Image
          src="./assets/dashed3.png"
          alt="dashed3"
          width={92}
          height={223}
          className={styles.absolute}
          style={{ left: '91%', top: 70 }}
        />
        <Image
          src="./assets/dashed4.png"
          alt="dashed4"
          width={146}
          height={140}
          className={styles.absolute}
          style={{ left: '85.5%', top: 350 }}
        />
        <Image
          src="./assets/dashed5.png"
          alt="dashed5"
          width={1}
          height={58}
          className={styles.absolute}
          style={{ left: '16%', top: 360 }}
        />
        <Shade
          color="#fcf4e2"
          shadowColor="#bfb596"
          shadowTop="1rem"
          contentPadding="2rem"
          customStyles={{ left: '18%', top: 100, ...zIndexTop }}
        >
          <Image
            src={title}
            alt="title"
            width={242}
            height={37}
          />
        </Shade>
        <Shade
          shadowTop="1rem"
          contentPadding="3rem"
          customStyles={{ left: '44%', top: 80 }}
        >
          <Image
            src={eventName}
            alt="eventName"
            width={253}
            height={32}
          />
        </Shade>
        <div className={`${styles.eventRecords} ${styles.absolute}`}>
          <div className={styles.recordContainer}>
            <span className={styles.record}>1295</span>
            <span className={styles.recordName}>Total</span>
          </div>
          <div className={styles.recordContainer}>
            <span className={styles.record}>1175</span>
            <span className={styles.recordName}>Personal</span>
          </div>
          <div className={styles.recordContainer}>
            <span className={styles.record}>46</span>
            <span className={styles.recordName}>Team</span>
          </div>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <Shade
          color="#fcf4e2"
          shadowColor="#bfb596"
          shadowTop="1rem"
          contentPadding="2rem"
          width="90vw"
          customStyles={{ margin: '0rem auto', marginBottom: '2rem', textAlign: 'center' }}
        >
          <Image src={title} alt="title" />
        </Shade>
        <Shade
          shadowTop="1rem"
          contentPadding="2rem"
          width="95vw"
          customStyles={{ margin: '0rem auto', marginBottom: '2rem', textAlign: 'center' }}
        >
          <Image src={eventName} alt="eventName" />
        </Shade>
        <div className={styles.eventRecords}>
          <div className={styles.recordContainer}>
            <span className={styles.record}>1295</span>
            <span className={styles.recordName}>Total</span>
          </div>
        </div>
        <div className={styles.eventRecords}>
          <div className={styles.recordContainer}>
            <span className={styles.record}>1175</span>
            <span className={styles.recordName}>Personal</span>
          </div>
        </div>
        <div className={styles.eventRecords}>
          <div className={styles.recordContainer}>
            <span className={styles.record}>46</span>
            <span className={styles.recordName}>Team</span>
          </div>
        </div>
      </div>
    </>
  )
}
