import Header from '../components/Header';
import Introduction from '../components/Introduction';
import SubIntroduction from '../components/SubIntroduction';
import FriendlyBanner from '../components/FriendlyBanner';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Introduction />
      <SubIntroduction />
      <FriendlyBanner />
    </div>
  )
}
