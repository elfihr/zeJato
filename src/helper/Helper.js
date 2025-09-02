import service01 from "../assets/service/service01.webp"
import service02 from "../assets/service/service02.webp"
import service03 from "../assets/service/service03.webp"
import service04 from "../assets/service/service04.webp"
import service05 from "../assets/service/service05.webp"
import service06 from "../assets/service/service06.webp"

import price01 from '../assets/price01.webp'
import price02 from '../assets/price02.webp'
import price03 from '../assets/price03.webp'
import price04 from '../assets/price04.webp'

import gal01 from '../assets/gallery/gallery01.webp'
import gal02 from '../assets/gallery/gallery02.webp'
import gal03 from '../assets/gallery/gallery03.webp'
import gal04 from '../assets/gallery/gallery04.webp'
import gal05 from '../assets/gallery/gallery05.webp'
import gal06 from '../assets/gallery/gallery06.webp'
import gal07 from '../assets/gallery/gallery07.webp'
import gal08 from '../assets/gallery/gallery08.webp'
import gal09 from '../assets/gallery/gallery09.webp'
import gal10 from '../assets/gallery/gallery10.webp'
import gal11 from '../assets/gallery/gallery11.webp'
import gal12 from '../assets/gallery/gallery12.webp'

import client01 from '../assets/testimonials/client01.webp'
import client02 from '../assets/testimonials/client02.webp'
import client03 from '../assets/testimonials/client03.webp'
import client04 from '../assets/testimonials/client04.webp'

import prod01 from '../assets/Products/prod01.webp'
import prod02 from '../assets/Products/prod02.webp'
import prod03 from '../assets/Products/prod03.webp'
import prod04 from '../assets/Products/prod04.webp'
import prod05 from '../assets/Products/prod05.webp'
import prod06 from '../assets/Products/prod06.webp'
import prod07 from '../assets/Products/prod07.webp'
import prod08 from '../assets/Products/prod08.webp'

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
    },
    {
        label:'Depoimentos',
        class:'link',
        href:'#testimonials'
    },
    {
        label:'Contato',
        class:'link',
        href:'#contact'
    }
]

export const services = [
    {
          img:service01,
        name:'Troca de Óleo',
        description:'Serviço de troca de óleo, garantindo o perfeito funcionamento do seu veículo'
    },
    {
        img:service02,
        name:'Lavagem Rápida',
        description:'Lavagem eficiente para quem tem pouco tempo, garantindo limpeza básica.'
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
        description:'Regulamos e fazemos troca de pastilhas dos freios.'
    },{
        img:service06,
        name:'Polimento e Enceramento',
        description:'Polimento para remoção de riscos superficiais e marcas além de brilho e proteção.'
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
        id:0,
        image:gal01,
        title:'Limpeza'
    },
    {
        id:1,
        image:gal02,
        title:'Limpeza'
    },
    {
        id:2,
        image:gal03,
        title:'Manutenção'
    },
    {
        id:3,
        image:gal04,
        title:'Manutenção'
    }
    ,{
        id:4,
        image:gal05,
        title:'Ferramentas'
    },
    {
        id:5,
        image:gal06,
        title:'Ferramentas'
    },
    {
        id:6,
        image:gal07,
        title:'Pintura'
    },
    {
        id:7,
        image:gal08,
        title:'Pintura'
    },
    {
        id:8,
        image:gal09,
        title:'Carros'
    },
    {
        id:9,
        image:gal10,
        title:'Carros'
    },
    {
        id:10,
        image:gal11,
        title:'Carros'
    },
    {
        id:11,
        image:gal12,
        title:'Carros'
    }

]

export const testimonials = [

    {
        description:'Levei meu carro para uma revisão completa e lavagem, e fiquei impressionado com a eficiência da equipe. Em poucas horas, meu carro estava como novo, tanto por dentro quanto por fora. Definitivamente voltarei!.',
        img:client01,
        name:'Paulo Cesar',

    },
    {
        description:'O pessoal do Zé a Jato foi extremamente atencioso e explicou todos os detalhes do serviço necessário para o meu carro. Além disso, o resultado da lavagem foi impecável. Recomendo a todos!.',
        img:client02,
        name:'Magda Motta'
    },
    {
        description:'Fiquei muito satisfeito com o custo-benefício dos serviços oferecidos. Além de resolverem o problema mecânico rapidamente, o carro saiu do lava-jato com um brilho incrível. Não poderia estar mais feliz!',
        img:client03,
        name:'Ruan de Andrade'
    },
    {
        description:'Já usei outros serviços antes, mas o Zé a Jato se destaca pelo profissionalismo e confiabilidade. Sempre sinto que meu carro está em boas mãos. A equipe é fantástica!',
        img:client04,
        name:'Jose Felizardo'
    },

]

export const prodGall = [
    {
        name:prod01,
    },
    {
        name:prod02,
    },
    {
        name:prod03,
    },
    {
        name:prod04,
    },
    {
        name:prod05,
    },
    {
        name:prod06,
    },
    {
        name:prod07,
    },
    {
        name:prod08,
    }
]