import styles from './Shaded.module.css'

export default function Shaded({
  children,
  type,
  italic = false,
  color = '#D9EAF2',
  shadowColor = '#86B6D3',
  shadowTop = '0.5rem',
  shadowLeft = shadowTop,
  contentPadding = '1rem',
  width = 'max-content',
  customStyles = {}
}) {
  return (
    <div className={styles.shadedWrap} style={customStyles}>
      {
        type === 'button'
          ? (
            <button
              className={styles.shaded}
              style={{ background: color, padding: contentPadding, width }}
            >
              { children }
            </button>
          )
          : (
            <div
              className={styles.shaded}
              style={{ background: color, padding: contentPadding, width }}
            >
              { children }
            </div>
          )
      }
      <div
        className={styles.shadedShadow}
        style={{
          background: shadowColor,
          top: shadowTop,
          left: italic ? shadowLeft : 0,
          padding: contentPadding,
          width
        }}
      >
        { children }
      </div>
      <div className={styles.hideContent} style={{ padding: contentPadding, width }}>
        { children }
      </div>
    </div>
  )
}
