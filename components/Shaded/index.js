import styles from './Shaded.module.css'

export default function Shaded({
  children,
  type,
  color = '#D9EAF2',
  shadowColor = '#86B6D3',
  shadowTop = '0.5rem',
  customStyles = {}
}) {
  return (
    <div className={styles.shadedWrap} style={customStyles}>
      {
        type === 'button'
          ? (
            <button className={styles.shaded} style={{ background: color }}>
              { children }
            </button>
          )
          : (
            <div className={styles.shaded} style={{ background: color }}>
              { children }
            </div>
          )
      }
      <div
        className={styles.shadedShadow}
        style={{ background: shadowColor, top: shadowTop }}
      >
        { children }
      </div>
      <div className={styles.hideContent}>{ children }</div>
    </div>
  )
}
