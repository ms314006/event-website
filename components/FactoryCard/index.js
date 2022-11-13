import styles from './factoryCard.module.css'

export default function FactoryCard({
  children,
  backgroundColor
}) {
  return (
    <div
      className={styles.factoryCard}
      style={{
        backgroundColor,
        backgroundImage: "url('./assets/factoryCard.png')"
      }}
    >
      { children }
    </div>
  )
}
