import styles from './Shaded.module.css'

export default function Shaded(
  { children, type, customStyles = {} }
) {
  return (
    <div className={styles.shadedWrap} style={customStyles}>
      {
        type === 'button'
          ? <button className={styles.shaded}>{ children }</button>
          : <div className={styles.shaded}>{ children }</div>
      }
      
      <div className={styles.shadedShadow}>{ children }</div>
      <div className={styles.hideContent}>{ children }</div>
    </div>
  )
}
