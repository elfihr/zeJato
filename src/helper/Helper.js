import service01 from "../assets/service/service01.jpg"
import service02 from "../assets/service/service02.jpg"
import service03 from "../assets/service/service03.jpg"
import service04 from "../assets/service/service04.png"
import service05 from "../assets/service/service05.png"
import service06 from "../assets/service/service06.png"

import price01 from '../assets/price01.jpg'
import price02 from '../assets/price02.jpg'
import price03 from '../assets/price03.jpg'
import price04 from '../assets/price04.jpg'

import gal01 from '../assets/gallery/gallery01.jpg'
import gal02 from '../assets/gallery/gallery02.jpg'
import gal03 from '../assets/gallery/gallery03.jpg'
import gal04 from '../assets/gallery/gallery04.jpg'
import gal05 from '../assets/gallery/gallery05.jpg'
import gal06 from '../assets/gallery/gallery06.jpg'
import gal07 from '../assets/gallery/gallery07.jpg'
import gal08 from '../assets/gallery/gallery08.jpg'
import gal09 from '../assets/gallery/gallery09.jpg'
import gal10 from '../assets/gallery/gallery10.jpg'
import gal11 from '../assets/gallery/gallery11.jpg'
import gal12 from '../assets/gallery/gallery12.jpg'


export const menuLink = [
    {
        label:'Home',
        class:'link',
        href:'#home'
    },
    {
        label:'Serviços',
        class:'link',
        href:'#service'
    },
    {
        label:'Preço',
        class:'link',
        href:'#price'
    },
    {
        label:'Galeria',
        class:'link',
        href:'#gallery'
    }
]

export const services = [
    {
          img:service01,
        name:'Troca de Óleo',
        description:'Serviço de troca de óleo, garantidndo o perfeito funcionamento do seu veículo'
    },
    {
        img:service02,
        name:'Lavagem Rápida',
        description:'avagem eficiente para quem tem pouco tempo, garantindo limpeza básica.'
    },
    {
        
        img:service03,
        name:'Lavagem de Motor',
        description:'Limpeza segura e cuidadosa do compartimento do motor.'
    },
    {
          img:service04,
        name:'Troca de Pneu',
        description:'Fazemos troca e calibramos os pneus.'
    },
    {
        img:service05,
        name:'Calibragem de Freios',
        description:'Regulamos e fazemos troca de pastilhas dos Freios.'
    },{
        img:service06,
        name:'Polimento e Enceramento',
        description:'Polimento para remoção de riscos superficiais e marcas lém de brilho e proteção.'
    },
]

export const prices = [
    {
        img:price01,
        value:'500,00',
        name:'Restauração de Couro',
        description:'Correção de rachaduras, arranhões e pequenos cortes no couro, devolvendo sua aparência impecável.'
    },
    {
        img:price02,
        value:'320,00',
        name:'Tingimento e Rejuvenescimento',
        description:'Trazemos de volta a cor e o brilho originais do couro do seu veículo com nosso serviço de tingimento e rejuvenescimento.'
    },
    {
        img:price03,
        value:'110,00',
        name:'Cristalização de Vidros',
        description:'Oferecemos serviço de cristalização de vidros que proporciona clareza e proteção, tornando a direção mais segura em todas as condições climáticas.'
    },
    {
        img:price04,
        value:'150,00',
        name:'Reparos de Suspensão',
        description:'Avaliação e reparo de componentes da suspensão, como amortecedores e molas, para garantir conforto e estabilidade.'
    }
]

export const carGallery = [
    {
        img:gal01,
        category:'Limpeza'
    },
    {
        img:gal02,
        category:'Limpeza'
    },
    {
        img:gal03,
        category:'Manutenção'
    },
    {
        img:gal04,
        category:'Manutenção'
    }
    ,{
        img:gal05,
        category:'Ferramentas'
    },
    {
        img:gal06,
        category:'Ferramentas'
    },
    {
        img:gal07,
        category:'Pintura'
    },
    {
        img:gal08,
        category:'Pintura'
    },
    {
        img:gal09,
        category:'Carros'
    },
    {
        img:gal10,
        category:'Carros'
    },
    {
        img:gal11,
        category:'Carros'
    },
    {
        img:gal12,
        category:'Carros'
    }

]