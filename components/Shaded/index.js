import styles from './Shaded.module.css'

export default function Shaded({
  children,
  type,
  color = '#D9EAF2',
  shadowColor = '#86B6D3',
  shadowTop = '0.5rem',
  contentPadding = '1rem',
  customStyles = {}
}) {
  return (
    <div className={styles.shadedWrap} style={customStyles}>
      {
        type === 'button'
          ? (
            <button
              className={styles.shaded}
              style={{ background: color, padding: contentPadding }}
            >
              { children }
            </button>
          )
          : (
            <div
              className={styles.shaded}
              style={{ background: color, padding: contentPadding }}
            >
              { children }
            </div>
          )
      }
      <div
        className={styles.shadedShadow}
        style={{ background: shadowColor, top: shadowTop, padding: contentPadding }}
      >
        { children }
      </div>
      <div className={styles.hideContent} style={{ padding: contentPadding }}>
        { children }
      </div>
    </div>
  )
}
