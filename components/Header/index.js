import Image from 'next/image'
import ShadedButton from '../ShadedButton'
import logo from '../../public/assets/logo-lg.png'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo"
        className={styles.logo}
        width={150}
        height={150}
      />
      <ul className={styles.menu}>
        <li>關卡資訊</li>
        <li>作品列表</li>
        <li>攻略資源</li>
        <li>求職專區</li>
      </ul>
      <div>
        <ShadedButton customStyles={{ marginRight: 16 }}>
          註冊報名
        </ShadedButton>
        <ShadedButton>登入</ShadedButton>
      </div>
    </div>
  )
}
