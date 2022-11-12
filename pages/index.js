import Header from '../components/Header';
import Introduction from '../components/Introduction';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Introduction />
    </div>
  )
}
