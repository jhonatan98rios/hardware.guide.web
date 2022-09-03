import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Flickity from 'react-flickity-component'

import styles from './style.module.scss'

const flickityOptions = {
  initialIndex: 0,
  draggable: true,
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false,
  accessibility: true,
  cellAlign: 'center'
}

interface CarouselInterface {
  content: {
    data: Array<any>
  }
}

const Carousel: NextPage<CarouselInterface> = ({content}) => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Flickity
        className={styles.carousel}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >

        { content.data.map((hardware: any, index: number) => {
          return(
            <div className={styles.card} key={index}>
              <div className={styles.imageBox}>
                { 
                  hardware.image && 
                  <figure> 
                    <img className={styles.image} src={hardware.image} alt="hardware" /> 
                    <figcaption> Imagem do hardware <br /> (Imagens meramente ilustrativa) </figcaption>
                  </figure>
                }
              </div>
              <div className={styles.description}>
                { hardware.name && <h4> {hardware.name} </h4> }

                {
                  hardware.cpu && <p> CPU: {hardware.cpu} </p>
                }
                
                {
                  hardware.moba && <p> Placa Mãe: {hardware.moba} </p>
                }
                
                {
                  hardware.storage &&
                  <p> Armazenamento: {hardware.storage} </p>
                }
                {
                  hardware.ram &&
                  <p> Ram: {hardware.ram} </p>
                }
                {
                  hardware.gpu &&
                  <p> GPU: {hardware.gpu} </p>
                }
                { 
                  hardware.screen &&
                  <p> Tela: {hardware.screen || 'Não acompanha'}  </p>
                }
                {
                  hardware.so &&
                  <p> Sistema: {hardware.so || 'Windows ou Linux'} </p>
                }
                {
                  hardware.price &&
                  <p> Valor aproximado: R$ {hardware.price} </p>
                }
                {
                  hardware.url?.length > 0 &&
                  <a href={hardware.url} className={styles.button}>
                    Ver o produto
                  </a>
                }
              </div>
            </div>
          )
        })}
        
      </Flickity>
    </div>
  );
}

export default Carousel