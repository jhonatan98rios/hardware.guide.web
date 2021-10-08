import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.scss'

import Info from '../components/home/Info'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Gadget</title>
        <meta name="description" content="Encontre o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta name='theme-color' content='#000000' />
      </Head>

      <main>
        <div className={styles.container}>
          <img src="/logo.svg" className={styles.image} />
          <h2 className={styles.title}> Smart Gadget </h2>

          <Link href="/pesquisar">
            <p className={styles.link}> 
              Começar
            </p> 
          </Link>

          <Link href="#info">
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
