import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { options } from '../../Mockdata/Popular'

import styles from './style.module.scss'

const Popular: NextPage = () => {
  
  const router = useRouter()

  function navigate(itens: any){
    router.push({
      pathname: '/popular-results',
      query: itens
    })
  }

  return (
    <div className="transition">
      <Head>
        <title>Guia de Hardware | Pesquisar</title>
        <meta name="description" content="Use inteligência artifícial para encontrar o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.view}>
          <h2 className={styles.title}> Veja nossas opções recomendadas </h2>

          <div className={styles.scrollView}>
            { options.map((option, index) => (
              <button className={styles.touchableOpacity} 
                key={index}
                onClick={()=> navigate(option.itens)}
              >
                <div className={styles.text}>
                  { option.name }
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Popular


