import Shaded from '../Shaded'
import styles from './awardAndSelection.module.css'

export default function AwardAndSelection() {
  return (
    <div className={styles.container}>
      <div className={styles.awardContainer}>
        <div className={styles.awardNameContainer}>
          <div className={styles.awardName}>
            <span>初選佳作</span>
          </div>
        </div>
        <Shaded
          italic
          color="#ffffff"
          shadowColor="#D9D9D9"
          contentPadding="3rem 2rem 1rem 2rem"
          width="16rem"
        >
          <div className={styles.awardContent}>
            <span className={styles.award}>共60位 數位獎狀</span>
            <span className={styles.awardCount}>每週主題個人組10位、團體組10組</span>
          </div>
        </Shaded>
      </div>
      <div className={styles.twoAwardsRow}>
        <div className={styles.awardContainer}>
          <div className={styles.awardNameContainer}>
            <div className={styles.awardName}>
              <span>個人企業獎</span>
            </div>
          </div>
          <Shaded
            italic
            color="#ffffff"
            shadowColor="#D9D9D9"
            contentPadding="3rem 2rem 1rem 2rem"
            width="16rem"
          >
            <div className={styles.awardContent}>
              <span className={styles.award}>共六位 NTD 3,000/位</span>
              <span className={styles.awardCount}>每週主題各 2 名，設計 1 位、前端 1 位</span>
            </div>
          </Shaded>
        </div>
        <div className={styles.awardContainer}>
          <div className={styles.awardNameContainer}>
            <div className={styles.awardName}>
              <span>團體企業獎</span>
            </div>
          </div>
          <Shaded
            italic
            color="#ffffff"
            shadowColor="#D9D9D9"
            contentPadding="3rem 2rem 1rem 2rem"
            width="16rem"
          >
            <div className={styles.awardContent}>
              <span className={styles.award}>共三組 NTD 10,000/組</span>
              <span className={styles.awardCount}>每週主題各 1 組</span>
            </div>
          </Shaded>
        </div>
      </div>
      <div className={styles.selectionContainer}>
        <div className={styles.awardNameContainer}>
          <div className={styles.selectionName}>
            <span>初選</span>
          </div>
        </div>
        <Shaded
          italic
          color="#ffffff"
          shadowColor="#D9D9D9"
          contentPadding="3rem 2rem 1rem 2rem"
          width="25.5rem"
        >
          <div className={styles.awardContent}>
            <span className={styles.award}>
              將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單
            </span>
          </div>
        </Shaded>
      </div>
      <div className={styles.awardContainer}>
        <div className={styles.awardNameContainer}>
          <div className={styles.selectionName}>
            <span>決選</span>
          </div>
        </div>
        <Shaded
          italic
          color="#ffffff"
          shadowColor="#D9D9D9"
          contentPadding="3rem 2rem 1rem 2rem"
          width="25.5rem"
        >
          <div className={styles.awardContent}>
            <span className={styles.award}>
              將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單
            </span>
          </div>
        </Shaded>
      </div>
    </div>
  )
}
