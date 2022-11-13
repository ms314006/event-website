import Image from 'next/image'
import styles from './friendlyBanner.module.css'

export default function FriendlyBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.uiDesigner}>
        <Image
          src="./assets/uiDesigner.png"
          alt="uiDesigner"
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.frontEndEngineer}>
        <Image
          src="./assets/frontEndEngineer.png"
          alt="frontEndEngineer"
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  )
}
