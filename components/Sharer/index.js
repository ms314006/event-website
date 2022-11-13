import React from 'react';
import Image from 'next/image';
import Shaded from '../Shaded'
import styles from './sharer.module.css'

export default function Sharer() {
  const getSpaces = (count) => (
    Array.from(new Array(count))
      .map((_value, index) => index)
      .map((key) => <React.Fragment key={key}>&nbsp;</React.Fragment>)
  )

  const sharers = [
    {
      theme: '網站的動態趨勢',
      time: '11/3（四）20:00 ~ 21:30',
      jobTitles: ['版塊設計創辦人暨設計總監'],
      name: '李明',
      photo: 'sharer1',
    }, 
    {
      theme: 'jQuery 也可以做到的互動效果',
      time: '11/10（四）20:00 ~ 21:30',
      jobTitles: ['Angular Taiwan 傳教士'],
      name: 'Leo',
      photo: 'sharer2',
    }, 
    {
      theme: '做事不能拖拖拉拉，但網頁可以：draggable.js 介紹？',
      time: '11/17（四）20:00 ~ 21:30',
      jobTitles: ['版塊設計創辦人暨設計總監'],
      name: '邱繼緯',
      photo: 'sharer3',
    }, 
    {
      theme: '互動式網頁設計工程師該具備哪些技能？',
      time: '11/24（四）20:00 ~ 21:30',
      jobTitles: ['墨雨互動設計 創辦人', '生成式藝術家'],
      name: '吳哲宇',
      photo: 'sharer4',
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span>各界</span>
        <span>
          { getSpaces(4) }
          大神
        </span>
        <span>
          { getSpaces(8) }
          接力分享
        </span>
      </div>
      <div className={styles.mobileTitleContainer}>
        <span>各界大神接力分享</span>
      </div>
      <div className={styles.sharers}>
        {
          sharers.map((sharer) => (
            <div key={sharer.name} className={styles.sharer}>
              <Shaded color="#ffffff" width="26rem" contentPadding="2rem 1rem 1rem 1rem">
                <div className={styles.sharerContent}>
                  <div className={styles.shareInformation}>
                    <span className={styles.shareTheme}>{ sharer.theme }</span>
                    <span className={styles.shareTime}>{ sharer.time }</span>
                    <div>
                      {
                        sharer.jobTitles.map((jobTitle) => (
                          <span
                            key={jobTitle}
                            className={styles.sharerJobTitle}
                          >
                            { jobTitle }
                          </span>
                        ))
                      }
                      <span className={styles.sharerName}>{ sharer.name }</span>
                    </div>
                  </div>
                  <Image
                    src={`./assets/${sharer.photo}.png`}
                    alt={sharer.photo}
                    width={75}
                    height={75}
                  />
                </div>
              </Shaded>
            </div>
          ))
        }
      </div>
    </div>
  )
}
