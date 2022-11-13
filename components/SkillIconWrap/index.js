import Image from 'next/image'
import Shade from '../Shaded';
import styles from './skillIconWrap.module.css'

export default function SkillIconWrap({ children, backgroundColor, border, position }) {
  return (
    <div
      className={styles.SkillIconWrap}
      style={{
        background: backgroundColor,
        borderWidth: border ? '0.0625rem' : '0rem',
        ...position,
      }}
    >
      { children }
    </div>
  )
}
