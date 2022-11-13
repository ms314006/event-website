import Image from 'next/image'
import Shaded from '../Shaded'
import styles from './apply.module.css'

export default function Apply() {
  return (
    <div className={styles.container}>
      <Shaded
        type="button"
        width="35rem"
        contentPadding="6rem"
        shadowTop="1rem"
      >
        <div className={styles.apply}>立即報名</div>
      </Shaded>
      <Image
        src="./assets/uiDesignerHead.png"
        alt="uiDesignerHead"
        width={238}
        height={234}
        className={styles.uiDesignerHead}
      />
      <Image
        src="./assets/fontEndEngineerHead.png"
        alt="fontEndEngineerHead"
        width={238}
        height={234}
        className={styles.fontEndEngineerHead}
      />
    </div>
  )
}
