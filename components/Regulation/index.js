import Image from 'next/image'
import Shaded from '../Shaded'
import styles from './regulation.module.css'

export default function Regulation() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Shaded color="#ffffff" shadowColor="#6b6b6b">
          <span className={styles.titleChar}>活</span>
        </Shaded>
        <Shaded color="#ffffff" shadowColor="#6b6b6b">
          <span className={styles.titleChar}>動</span>
        </Shaded>
        <Shaded color="#ffffff" shadowColor="#6b6b6b">
          <span className={styles.titleChar}>介</span>
        </Shaded>
        <Shaded color="#ffffff" shadowColor="#6b6b6b">
          <span className={styles.titleChar}>紹</span>
        </Shaded>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.pinLeft} />
        <div className={styles.pinRight} />
        <Image
          src="./assets/dashed9.png"
          alt="dashed9"
          width={500}
          height={2}
          className={styles.linkDashed}
        />
        <Shaded
          color="#ffffff"
          shadowColor="#6b6b6b"
          shadowTop="0.75rem"
          contentPadding="4rem 0rem"
        >
          <div className={styles.content}>
            <div className={styles.stepContent}>
              <Shaded color="#bf9d96" shadowColor="#ffffff">
                <span className={styles.stepName}>報名<br />時間</span>
              </Shaded>
              <span className={styles.stepPeriod}>
                10/13(四) 早上 11:00<br />
                至<br />
                11/06(日) 晚上 23:59
              </span>
              <span>截止前可修改報名組別</span>
            </div>
            <div className={styles.stepContent}>
              <Shaded color="#beb596" shadowColor="#ffffff">
                <span className={styles.stepName}>開賽<br />時間</span>
              </Shaded>
              <span className={styles.stepPeriod}>
                10/31 UI組及團體組開賽<br />
                &<br />
                11/07 前端組開賽
              </span>
              <span>活動採用 UI、前端接力合作形式進行</span>
            </div>
            <div className={styles.stepContent}>
              <Shaded color="#8fb5d0" shadowColor="#ffffff">
                <span className={styles.stepName}>登錄<br />時間</span>
              </Shaded>
              <span className={styles.stepPeriod}>
                10/31(一) 中午 12:00<br />
                至<br />
                11/28(一) 中午 12:00
              </span>
              <span>依賽程登錄作品</span>
            </div>
          </div>
          <div className={styles.summary}>
            挑戰流程 : 每個挑戰主題提供一週開發時間，未在隔一週中午12:00前登錄作品者，當週即為挑戰失敗。
          </div>
        </Shaded>
      </div>
    </div>
  )
}
