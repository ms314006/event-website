import Header from '../components/Header';
import Introduction from '../components/Introduction';
import SubIntroduction from '../components/SubIntroduction';
import FriendlyBanner from '../components/FriendlyBanner';
import MainTheme from '../components/MainTheme';
import Regulation from '../components/Regulation';
import AwardAndSelection from '../components/AwardAndSelection';
import Divider from '../components/Divider';
import Sharer from '../components/Sharer';
import FAQ from '../components/FAQ';
import Apply from '../components/Apply';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Introduction />
      <SubIntroduction />
      <FriendlyBanner />
      <MainTheme />
      <Regulation />
      <AwardAndSelection />
      <Divider />
      <Sharer />
      <FAQ />
      <Apply />
      <Footer />
    </div>
  )
}
