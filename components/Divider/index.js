import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './divider.module.css'

export default function Divider() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.screen.width);
    const resize = window.addEventListener(
      'resize',
      ({ target: { screen: { width } } }) => { setWindowWidth(width); }
    );

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);
  const LOGO_WIDTH = 90;
  const logos = ['kdanLogo', 'titanLogo', 'blockstudioLogo'];
  const repeatTimes = Math.ceil(windowWidth / (LOGO_WIDTH * logos.length));
  return (
    <div className={styles.container}>
      {
        Array.from(new Array(repeatTimes))
        .map(() => (
          logos.map((logo) => (
            <Image
              key={logo}
              src={`./assets/${logo}.png`}
              alt={logo}
              width={LOGO_WIDTH}
              height={90}
              className={styles.logo}
            />
          ))
        ))
      }
    </div>
  )
}
