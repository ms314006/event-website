import styles from './skillIconWrap.module.css'

export default function SkillIconWrap({
    children,
    backgroundColor,
    border,
    width = '4.3125rem',
    height = '4.3125rem',
    position,
}) {
  return (
    <div
      className={styles.skillIconWrap}
      style={{
        background: backgroundColor,
        borderWidth: border ? '0.0625rem' : '0rem',
        position: Boolean(position) ? 'absolute' : 'static',
        height,
        width,
        ...position,
      }}
    >
      { children }
    </div>
  )
}
