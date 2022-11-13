import Image from 'next/image'
import Shaded from '../Shaded'
import styles from './apply.module.css'

export default function Apply() {
  return (
    <div className={styles.container}>
      <Shaded
        type="button"
        width="24rem"
        contentPadding="6rem"
        shadowTop="1rem"
      >
        <div className={styles.apply}>立即報名</div>
      </Shaded>
      <div className={styles.uiDesignerHead}>
        <Image
          src="./assets/uiDesignerHead.png"
          alt="uiDesignerHead"
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.fontEndEngineerHead}>
        <Image
          src="./assets/fontEndEngineerHead.png"
          alt="fontEndEngineerHead"
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  )
}
