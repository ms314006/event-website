import styles from './ShadedButton.module.css'

export default function ShadedButton({ children, customStyles = {} }) {
  return (
    <div className={styles.shadedButtonWrap} style={customStyles}>
      <button className={styles.shadedButton}>{ children }</button>
      <div className={styles.shadedButtonShadow}>{ children }</div>
      <div className={styles.hideButtonContent}>{ children }</div>
    </div>
  )
}
