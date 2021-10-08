import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './style.module.scss'

const Search: NextPage = () => {
  
  const [search, setSearch] = useState('')
  const [warning, setWarning] = useState<string | null>('')
  const router = useRouter()

  function navigation(route: string){

    if(route !== '/resultado') router.push(route)

    if(search.length <= 0){
      setWarning('Me fale um pouco sobre o computador que precisa')
    } else if (search.length <= 8){
      setWarning('Esse texto é muito curto. Me fale um pouco mais')
    } else if (search.length > 1024){
      setWarning('O texto não pode ter mais 1024 caracteres')
    } else {
      setWarning(null)
      router.push({
        pathname: route,
        query: { 
          search
        }
      })
    }
  }

  return (
    <div className="transition">
      <Head>
        <title>Guia de Hardware | Pesquisar</title>
        <meta name="description" content="Use inteligência artifícial para encontrar o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <form onSubmit={() => navigation('/resultado')} className={styles.container}>

          <h2 className={styles.title}> Me fale sobre o computador que você precisa. </h2>

          <textarea 
            className={styles.textInput} 
            placeholder="Procuro um PC para..."
            value={search}
            onChange={e => setSearch(e.target.value) }
            autoFocus
          />
          
          { warning && 
            <div className={`${styles.warning} m-t-16`}> { warning } </div> }
          {
            search.length > 8 &&
            <div className={`${styles.button} p-l-16 p-r-16`} onClick={ () => navigation('/resultado') }>
              <div className={styles.text}> 
                Confirmar 
              </div> 
            </div>
          }

          <Link href="/">
            <a className={styles.link}>
              Voltar
            </a>
          </Link>

          <p className={styles.disclaimer}>
            * O algoritmo está em fase de treino, e pode apresentar inconsistências. As frases serão armazenadas e posteriormente utilizadas no treino do algoritmo.
          </p>
        </form>
      </main>
    </div>
  )
}

export default Search


