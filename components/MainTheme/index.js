import Image from 'next/image'
import Shaded from '../Shaded'
import FactoryCard from '../FactoryCard'
import ThemeCard from '../ThemeCard'
import styles from './mainTheme.module.css'

export default function MainTheme() {
  return (
    <div className={styles.container}>
      <Shaded italic color='#ffffff' shadowTop='1rem'>
        <span className={styles.title}>年度最強合作，三大主題來襲</span>
      </Shaded>
      <span className={styles.subTitle}>
        各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
      </span>
      <div className={styles.factories}>
        <FactoryCard backgroundColor="#8fb5d0">
          <Image
            src="./assets/blockstudio.png"
            alt="blockstudio"
            width={75}
            height={90}
          />
        </FactoryCard>
        <FactoryCard backgroundColor="#beb596">
          <Image
            src="./assets/kdan.png"
            alt="kdan"
            width={75}
            height={90}
          />
        </FactoryCard>
        <FactoryCard backgroundColor="#bf9d96">
          <Image
            src="./assets/titan.png"
            alt="titan"
            width={75}
            height={90}
          />
        </FactoryCard>
        <ThemeCard
          themeColor="#dceaf1"
          textColor="#86B6D3"
          weekNth="1"
          title="The F2E 活動網站設計"
          hashTag="視差滾動"
          factoryName="版塊設計"
          icon={
            <Image src="./assets/parallax.png" alt="week1" width={60} height={60} />
          }
        />
        <ThemeCard
          themeColor="#fcf4e2"
          textColor="#C0B592"
          weekNth="2"
          title="今晚，我想來點點簽"
          hashTag="Canvas"
          factoryName="凱鈿行動"
          icon={
            <Image src="./assets/sign.png" alt="week2" width={60} height={60} />
          }
        />
        <ThemeCard
          themeColor="#f1e3de"
          textColor="#C69C94"
          weekNth="3"
          title="Scrum 新手村"
          hashTag="JS draggable"
          factoryName="鈦坦科技"
          icon={
            <Image src="./assets/scrum.png" alt="week3" width={60} height={60} />
          }
        />
      </div>
    </div>
  )
}
