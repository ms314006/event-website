import Image from 'next/image'
import Shaded from '../Shaded'
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
        <Shaded type="button" customStyles={{ marginRight: 16 }}>
          註冊報名
        </Shaded>
        <Shaded>登入</Shaded>
      </div>
    </div>
  )
}
