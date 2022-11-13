import Header from '../components/Header';
import Introduction from '../components/Introduction';
import SubIntroduction from '../components/SubIntroduction';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Introduction />
      <SubIntroduction />
    </div>
  )
}
