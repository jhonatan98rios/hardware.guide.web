import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './style.module.scss'

import icon from '../assets/icone.png'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Guia de Hardware</title>
        <meta name="description" content="Encontre o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta name='theme-color' content='#000000' />
      </Head>

      <main>
        <div className={styles.container}>
          <img src={icon.src} className={styles.image} alt="Guia de hardware" />
          <h2 className={styles.title}> Guia de Hardware </h2>

          <Link href="/pesquisar">
            <div className={styles.button}>
              <a className={styles.link}> 
                Começar
              </a> 
            </div>
          </Link>

          <Link href="/informacoes">
            <a className={styles.anchor}>
              Informações
            </a>
          </Link>

          <p className={styles.disclaimer}> *Não forneça dados sensíveis. Os dados informados serão catalogados e expostos em um banco de dados aberto, para fins de estudo. </p>
        </div>

        {/* <Info /> */}
      </main>
    </div>
  )
}

export default Home
