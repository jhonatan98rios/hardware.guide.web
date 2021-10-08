import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Carousel from '../../components/results/Carousel'

import styles from './style.module.scss'

/* function Results({router}){ */

const Results: NextPage = () => {

  const [content, setContent] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    if(!router.query.search) {
      router.push('/')
    }else{
      axios.post('https://smart-gadget-web.herokuapp.com/api/smart', {
        text: router.query.search, 
      })
      .then(response => setContent(response))
      .catch(reject => console.log(reject))
    }
  }, [])

  return (
    <div className="transition">
      <Head>
        <title>Smart Gadget | Resultado</title>
        <meta name="description" content="Veja os pcs que separamos para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        { !content && <img className={styles.svg} src="./atom.svg" alt="loading" /> }

        { (content && content.status == 200) &&
          <div>
            <h2 className={`${styles.title}`}> Veja o que separamos para você </h2>
            <Carousel content={content} />

            <Link href="/">
              <a className={styles.link}> Início </a>
            </Link>

          </div>
        }
      </div>
    </div>
  );
}

export default withRouter(Results);
