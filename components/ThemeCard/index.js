import Image from 'next/image'
import Shaded from '../Shaded'
import styles from './themeCard.module.css'

export default function ThemeCard({
  themeColor,
  textColor,
  weekNth,
  title,
  hashTag,
  factoryName,
  icon,
}) {
  return (
    <div
      className={styles.themeCard}
      style={{ borderColor: themeColor }}
    >
      <div className={styles.top} style={{ background: themeColor, color: textColor }}>
        { `Week${weekNth}` }
      </div>
      <span className={styles.title}>{ title }</span>
      <span className={styles.hashTag}>{ `#${hashTag}` }</span>
      { icon }
      <button className={styles.detailButton} style={{ background: themeColor }}>
        查看關卡細節
      </button>
      <div className={styles.bottom} style={{ background: themeColor, color: textColor }}>
        { factoryName }
      </div>
    </div>
  )
}
