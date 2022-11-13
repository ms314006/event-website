import Image from 'next/image'
import Shade from '../Shaded';
import SkillIconWrap from '../SkillIconWrap';
import styles from './subIntroduction.module.css'

export default function SubIntroduction() {
  return (
    <div className={styles.container}>
      <SkillIconWrap backgroundColor="#beb596" position={{ left: '85%' }}>
        <Image src="./assets/video.png" alt="video" width={42} height={42} />
      </SkillIconWrap>
      <SkillIconWrap backgroundColor="#8fb5d0" position={{ left: '6%', top: 330 }}>
        <Image src="./assets/idea.png" alt="idea" width={30} height={42} />
      </SkillIconWrap>
      <SkillIconWrap backgroundColor="#bf9d96" position={{ left: '68%', top: 660 }}>
        <Image src="./assets/tree.png" alt="tree" width={42} height={42} />
      </SkillIconWrap>
      <Image
        src="./assets/dashed5.png"
        alt="dashed5"
        width={1}
        height={48}
        className={styles.absolute}
        style={{ left: '66%', top: 270 }}
      />
      <Image
        src="./assets/dashed6.png"
        alt="dashed6"
        width={113}
        height={144}
        className={styles.absolute}
        style={{ left: '76%', top: 77 }}
      />
      <Image
        src="./assets/dashed7.png"
        alt="dashed7"
        width={329}
        height={113}
        className={styles.absolute}
        style={{ left: '10%', top: 360 }}
      />
      <Image
        src="./assets/dashed8.png"
        alt="dashed8"
        width={360}
        height={130}
        className={styles.absolute}
        style={{ left: '23%', top: 570 }}
      />
      <Shade
        color="#ffffff"
        shadowColor="#beb596"
        shadowTop="1rem"
        contentPadding="1rem 3rem"
        customStyles={{ left: '18%', top: 180 }}
      >
        <span className={styles.title}>羨慕別人的酷酷網頁動畫?</span>
      </Shade>
      <Shade
        color="#ffffff"
        shadowColor="#8fb5d0"
        shadowTop="1rem"
        contentPadding="1rem 3rem"
        customStyles={{ left: '51%', top: 250 }}
      >
        <span className={styles.title}>滿足不了同事的許願</span>
      </Shade>
      <Shade
        color="#ffffff"
        shadowColor="#bf9d96"
        shadowTop="1rem"
        contentPadding="1rem 3rem"
        customStyles={{ left: '-2%', top: 330 }}
      >
        <span className={styles.title}>動畫技能樹太雜無從下手</span>
      </Shade>
    </div>
  )
}
