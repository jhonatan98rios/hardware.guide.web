import type { NextPage } from 'next'
import styles from './style.module.scss'
import Link from 'next/link'


const Info: NextPage = () => {

  return (
    <div className={styles.container} id="info">
      <div className={styles.description}>
        <strong> Encontre o computador ideal para você! </strong><br/><br/>
        <p>
          Através de inteligência artifícial e processamento de linguagem natural, o Smart Gadget é capaz de identificar qual hardware e software se encaixam em suas necessidades.<br/>
          Para isso, o sistema faz uso de todo o poder computacional disponível na nuvem, além das melhores práticas de desenvolvimento, arquitetura e tecnologias disponíveis no mercado.
        </p>
        <p> É só inserir algumas informações, como: <br/>"Preciso de um computador para edição de vídeo", ou até, "Quero um pc para jogar". <br/><br/> 
        Depois é só pressionar o botão "Confirmar" e aguardar que nossos servidores irão trabalhar para encontrar o pc ideal para sua necessidade.</p> <br/>
        <p className="disclaimer"> Não forneça dados sensíveis. Os dados informados serão armazenados, catalogados e expostos em um banco de dados aberto, para o treinamento do algoritmo. </p>
      </div>

      <Link href="#">
        <a className={styles.anchor}>
          Voltar
        </a>
      </Link>

      <Link href="https://jhonatan-dev-rios.herokuapp.com/" prefetch={false}>
        <a className={styles.link}>
          Powered by Jhonatan Teixeira Rios
        </a>
      </Link>
    </div>
  );
}

export default Info