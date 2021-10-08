import type { NextPage } from 'next'
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

                <p> CPU: {hardware.cpu} </p>
                <p> Placa Mãe: {hardware.moba} </p>
                <p> Armazenamento: {hardware.storage} </p>
                <p> Ram: {hardware.ram} </p>
                <p> GPU: {hardware.gpu} </p>
                <p> Tela: {hardware.screen || 'Não acompanha'}  </p>
                <p> Sistema: {hardware.so || 'Windows ou Linux'} </p>
                <p> Valor aproximado: R$ {hardware.price} </p>
              </div>
            </div>
          )
        })}
        
      </Flickity>
    </div>
  );
}

export default Carousel