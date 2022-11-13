import Image from 'next/image'
import Shade from '../Shaded';
import styles from './skillIconWrap.module.css'

export default function SkillIconWrap({ children, backgroundColor, border, position }) {
  return (
    <div
      className={styles.skillIconWrap}
      style={{
        background: backgroundColor,
        borderWidth: border ? '0.0625rem' : '0rem',
        position: Boolean(position) ? 'absolute' : 'static',
        ...position,
      }}
    >
      { children }
    </div>
  )
}
