//import { Icon } from 'astro-icon';
import { iconExteriors } from "./icons";

export const nameTags = {
    lanzamiento : {
        label : "En Lanzamiento"
    },
    planos : {
        label : "Sobre Plano"
    },
    construccion : {
        label : "En Construcción"
    },
    finalizado : {
        label : "Proyecto Finalizado"
    },
}

//Imagenes localmente
//morros
import logoMorroHouse from '../img/proyectos/morro-house/logo.webp';
import logoAltosMorros from '../img/proyectos/altos-de-los-morros/altos-moros.webp';
import planosflorencia2niveles from '../img/proyectos/morro-house/morro-plano-florencia-2niveles.webp';
import planosVenecia1niveles from '../img/proyectos/morro-house/morro-plano-venecia-1nivel.webp';

import planosflorencia3niveles from '../img/proyectos/morro-house/morro-plano-florencia-3niveles.webp';
import portada from '../img/proyectos/morro-house/portada.webp';
import panoramica from '../img/proyectos/altos-de-la-riviera/panoramica.webp';
import panoramicariviera from '../img/proyectos/riviera-del-mar/panoramica-riviera.webp';
import opcion3 from '../img/proyectos/morro-house/opcion-3.webp';

import mapamorrohouse from '../img/proyectos/morro-house/mapa-morro-house.webp';
import mapaaltosriviera from '../img/proyectos/altos-de-la-riviera/mapa-comercial-de-altos.webp';

export const asesorsData = {
    Vanesa : {
        fullName: 'Vanessa Calderon',
        email: 'info@apunidos.com',
        image:'https://i.ibb.co/ZcMDjNM/Vanessa.webp',
        place:"Gerente Comercial"
    },

    Guzman : {
        fullName: 'Guzmán Fernández',
        email: 'info@apinidos.com',
        image:'https://i.ibb.co/VYPJwSD/guzman.webp',
        place:""
    },

    Sugey : {
        fullName: 'Sugey Fernández',
        email: 'info@apunidos.com',
        image:'https://i.ibb.co/bPnKcWr/Sugey.webp',
        place:'Directora de Ventas'
    },

    Eliana : {
        fullName: 'Eliana Palacio',
        email: 'info@apunidos.com',
        image:'https://i.ibb.co/0qKJXFM/Eliana.webp',
        place: 'Gerente General'
    },

}




const { 
    bathrooms,
    bedrooms,
    pool,
    parking,
    petpark,
    units,
    playground,
    greenzone,
    road,
    bbq,
    wall,
    comercialstore,
    electronicdoor,
    cctv,
    salon,
    gym,
    cicloruta,
    area,
    jacuzzi,
    waterpark,
    restaurant,
    court,
    volleyball,
    electricgateway,
    camping,
    lake,
    garita

} = iconExteriors;

export const Projects = [
    //Bosques de la Riviera
    {        
        id:1,
        name: 'Bosques de la Riviera',
        slug: 'bosques-de-la-riviera',
        slogan : "Eco Lotes Campestres",
        price: 105000000,
        city: 'Juan de Acosta',
        address: 'Km 26 via al mar',
        area: '450 Mt2',        
        logo:'https://i.ibb.co/BqGyK5w/LOG-DE-PROYECTO.webp',
        tipo:"lotes",
        fase: "",
        imageMain : 'https://i.ibb.co/J7cd6Dm/bosques3.webp',                
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool ,
            },
            {
                name: "Lotes",
                quantity: 320,
                icon: area
            },
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:'cil:garage' ,
            },
            {
                name: "Parque de Mascotas",
                quantity: 1,
                icon:petpark ,
            },
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
            {
                name: "Zonas Bbq",
                quantity: 1,
                icon:bbq
            },
            {
                name: "Salon Social",
                quantity: 1,
                icon:salon
            },
            {
                name: "Gimnasio al aire libre",
                quantity: 1,
                icon:gym
            },
            {
                name: "Ciclo Ruta",
                quantity: 1,
                icon:cicloruta
            },
            {
                name: "Zona Comercial",
                quantity: 1,
                icon:comercialstore
            }

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d37068.63588263374!2d-75.11427183465972!3d10.851762586412537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUxJzAzLjgiTiA3NcKwMDUnNTkuMCJX!5e0!3m2!1ses-419!2sus!4v1679884316849!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.lanzamiento.label],
        extract:"PARCELACION BOSQUES DE LA RIVIERA es un proyecto urbanístico campestre de...",
        body:"PARCELACION BOSQUES DE LA RIVIERA es un proyecto urbanístico campestre de lotes donde se plantea una particular relación con el paisaje, y el clima continental extremo, a partir de la construcción de áreas comunes campestres que contribuyen al uso responsable de los recursos naturales limitados. Se encuentra ubicado en la Jurisdicción del municipio de Juan de Acosta, a solo 5 minutos de las playas de Santa Verónica, y 15 minutos de la marina de Puerto Velero, playas de Caño Dulce y Puerto Colombia, a 50 minutos de Centros Comerciales como BUENAVISTA, PRICESMART, HOMECENTER y a 60 minutos de Cartagena de indias; Se entregarán 320 lotes con áreas desde 450 m2, alineamientos y uso del suelo ya definidos, PARCELACION BOSQUES DE LA RIVIERA entrega lotes con toda la infraestructura sanitaria (PTARD, acueducto propio con pozos profundos, gas y eléctrica) necesarias para la construcción de su vivienda alejada del ruido y la contaminación de las grandes urbes, además de sus excelentes amenidades, dentro de las cuales se encuentra cabañas campestres, Senderos naturales, Piscinas para adultos y niños, Snack Bar, Parque Infantil, Parque exclusivo para Mascotas, parque ecológico, lagos natural, Salón de eventos, Canchas de Squash , canchas Múltiples, cancha de tenis, cancha de voleibol playa, circuito de patinaje, campo abierto para juegos extremos. Entregaremos vías primarias, parqueadero de visitantes y garita de acceso sistema electrónico de ingreso y circuito de seguridad externa local. El urbanismo se diseñó de tal manera que unirá la construcción con el paisaje existente, la utilización de piedra natural forrando la vías, fomentará el carácter campestre y las amplias zonas verdes, destacando el uso y cuidado de los recursos naturales dentro del condominio. La funcionalidad de las vías donde las circulaciones entre cada manzana permiten un desarrollo armónico con una vía primordial, conectada todas a un eje central donde está la zona recreativa con antejardín y parqueadero vehicular abierto. PARCELACION BOSQUES DE LA RIVIERA cuenta con una excelente ubicación estratégica en el KM 26 de la vía al mar entre BARRANQUILLA y CARTAGENA, quedando en una zona con excelente proyección urbanística y de muy alta valorización.", 
        images:[
            //'https://i.ibb.co/DgcVxgH/1.webp',
            //'https://i.ibb.co/k52TWCK/2.webp',
            //'https://i.ibb.co/rZ99vfx/3.webp',
            'https://i.ibb.co/k2JdNwC/bosques-2.webp',
            'https://i.ibb.co/4JVxhNK/bosques-3.webp',
            'https://i.ibb.co/28vHTjm/bosques-4.webp',
            'https://i.ibb.co/pJgNxcj/bosques-5.webp',
            'https://i.ibb.co/R2pCxmJ/bosques1-1.webp',
            'https://i.ibb.co/n08Kj4S/bosques1.webp',
            'https://i.ibb.co/SJwjpNF/bosques2.webp',
            'https://i.ibb.co/J7cd6Dm/bosques3.webp',
            'https://i.ibb.co/c6n04Kb/bosques4.webp',
            'https://i.ibb.co/b3Jj1DX/bosques5.webp',
            //'https://i.ibb.co/BqGyK5w/LOG-DE-PROYECTO.webp', //Logo
            //'https://i.ibb.co/Vgq3pBD/ubicacion.webp',
        ],  
        asesors: [asesorsData.Vanesa, asesorsData.Sugey],
        relations: [2,3,4],
        video:'https://www.youtube.com/embed/OLU69tGD-3k',
        Planos:['https://i.ibb.co/Vgq3pBD/ubicacion.webp' //Ubicación
                ]
    },

    //Altos  de la Riviera
    {
        id:2,
        name: 'Altos de la Riviera',
        slug: 'altos-de-la-riviera',
        slogan : "Reserva Campestre",
        price: 130000000,
        city: 'Bajo Ostión - Tubará',
        address: 'Km 21 via al mar',
        area: '300 - 650 Mt2',
        logo:'https://i.ibb.co/mqpkSvH/LOGO-DE-ALTOS-VECTOR.webp',
        imageMain : 'https://i.ibb.co/XYhPHgy/foto5.webp',
        imageMain2 : panoramica.src,
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool
            },
            {
                name: "Lotes",
                quantity: 320,
                icon:area
            },
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:parking
            },
            {
                name: "Parque de Mascotas",
                quantity: 1,
                icon:petpark
            },
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
            {
                name: "Jacuzzi",
                quantity: 1,
                icon:jacuzzi
            },
            {
                name: "Parque Acuatico",
                quantity: 1,
                icon:waterpark
            },
            {
                name: "Salon Social",
                quantity: 1,
                icon: salon
            },
            {
                name: "Restaurante",
                quantity: 1,
                icon:restaurant
            },
            {
                name: "Cancha multiple",
                quantity: 1,
                icon:court
            },
            {
                name: "Cancha de Voleibol Playa",
                quantity: 1,
                icon:volleyball
            },
            {
                name: "Gimnasio al Aire Libre",
                quantity: 1,
                icon:gym
            },
            {
                name: "Zona de Bqq",
                quantity: 1,
                icon:bbq
            },
            {
                name: "Cerramiento en Muro",
                quantity: 1,
                icon:wall
            },
            {
                name: "Cir. Cerrado en la Garita",
                quantity: 1,
                icon:cctv
            },
            {
                name: "Entrada Sist. Eléctronico",
                quantity: 1,
                icon:electronicdoor
            },
            {
                name: "Local Comercial",
                quantity: 1,
                icon:comercialstore
            }

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46088.033018363676!2d-75.00291199237915!3d10.970400542400178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef67f3afaa741e3%3A0x8b7d838a634a00a5!2sALTOS%20DE%20LA%20RIVIERA!5e0!3m2!1ses-419!2sus!4v1678583528889!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.construccion.label],
        extract:"",        
        body:"Es un proyecto urbanístico campestre, de lotes se plantea en  una topografía alabeada, una particular relación con el paisaje, y un clima continental extremo.        Ubicado en la vía al mar Km 21( Barranquilla-Cartagena)  a 7 minutos de las playas, son 190  lotes desde 300 m2 con áreas , alineamientos  y uso del suelo ya definidos.        ALTOS DE LA RIVIERA   entrega lotes con toda la infraestructura(sanitaria PTAR ,agua , gas y eléctrica)   necesarias para la construcción de su vivienda en donde AP unidos entregara  asesoría de diseño y  3 opciones de elevación de fachada para mantener el mismo concepto en todo el conjunto que con lleva a la ampliación de  los límites de la arquitectura y ofreciendo experiencias arquitectónicas con un nuevo estilo de vida; siendo la mejor opción para aquellas personas que desean disponer de una vivienda alejada del ruido y la contaminación de las grandes urbes.El urbanismo se diseñó  de tal manera  que  unirá  la construcción con el paisaje existente; la utilización de la piedra natural del sector forrando la vías   FOMENTARA EL CARÁCTER CAMPESTRE   y las amplias zonas verdes ,  destacando el uso y con ella una alternativa  la  ampliación de la construcción  a un segundo nivel más",        
        images:[
            //'https://i.ibb.co/sw8txqF/altos-index.webp',
            //'https://i.ibb.co/bvPVcK4/altos-index2.webp',
            'https://i.ibb.co/qYLrr5q/foto1.webp',
            'https://i.ibb.co/KKLhNn3/foto3.webp',
            'https://i.ibb.co/KFDyBCL/foto4.webp',
            'https://i.ibb.co/XYhPHgy/foto5.webp',
            'https://i.ibb.co/3Wk4g8z/foto6.webp',
            'https://i.ibb.co/W6F0pSd/foto7.webp',
            'https://i.ibb.co/B4BkggT/foto8.webp',
            'https://i.ibb.co/16JXzQ7/foto11.webp',
            'https://i.ibb.co/QCnkRSv/foto14.webp',
            //'https://i.ibb.co/mqpkSvH/LOGO-DE-ALTOS-VECTOR.webp', //logo
            //'https://i.ibb.co/2g3RMTG/planos-comercial-fina.webp',
        ],
        asesors: [asesorsData.Vanesa, asesorsData.Sugey],
        relations: [1,3,4],
        video:'https://www.youtube.com/embed/LXArNEjasCw',
        PlanoMapa : mapaaltosriviera.src,
        Planos:[ /*Plano*/ ]
    },

    //Altos de los Morros
    {
        id:3,
        name: 'Altos del Morro',
        slug: 'altos-del-morro',
        slogan : "Reserva Campestre",
        price: 130000000,
        city: 'Morros - Tubará',
        address: 'Km 22 via al mar',
        area: '300 Mt2',
        logo: logoAltosMorros.src,//'https://i.ibb.co/1QvFSMr/logo-copia.webp',
        imageMain : 'https://i.ibb.co/YZHXG2f/area-social.webp',
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool
            },
            {
                name: "Lotes",
                quantity: 320,
                icon:area
            },
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:parking
            },
            {
                name: "Parque de Mascotas",
                quantity: 1,
                icon:petpark
            },
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
            {
                name: "Zona Comercial",
                quantity: 1,
                icon:comercialstore
            },
            {
                name: "Diferentes Canchas",
                quantity: 1,
                icon:court
            },
            {
                name: "Parque Acuatico",
                quantity: 1,
                icon:waterpark
            },
            {
                name: "Salon Social",
                quantity: 1,
                icon:salon
            },
            {
                name: "Jacuzzi",
                quantity: 1,
                icon:jacuzzi
            },
            {
                name: "Restaurante",
                quantity: 1,
                icon:restaurant
            },
            {
                name: "Zona de Camping",
                quantity: 1,
                icon:camping
            },
            {
                name: "Gimnasio al Aire Libre ",
                quantity: 1,
                icon:gym
            },
            {
                name: "Lago con Muelle",
                quantity: 1,
                icon:lake
            },
            {
                name: "Ciclo Ruta",
                quantity: 1,
                icon:cicloruta
            }
        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79413.59515661116!2d-74.98612098848302!3d10.960660194755267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef67fe94fe395dd%3A0xed036ed0ea8fc2ad!2sALTOS%20DE%20LOS%20MORROS!5e0!3m2!1ses-419!2sus!4v1678583694066!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">`,
        tags: [nameTags.planos.label],
        extract:"",
        body:"Es un proyecto urbanístico campestre de lotes donde se plantea una particular relación con el paisaje, y el clima continental extremo, a partir de la construcción de áreas comunes campestres que contribuyen al uso responsable de los recursos naturales limitados. Se encuentra ubicado en la Jurisdicción del municipio de Tubara, a solo 5 minutos de la marina de puerto velero, Caño Dulce y Puerto Colombia, a 40 minutos de Centros Comerciales como BUENAVISTA, PRICESMART, HOMECENTER y a 50 minutos de Cartagena de indias. Cuenta con una excelente ubicación estratégica en el KM 22 de la vía al mar entre BARRANQUILLA y CARTAGENA, quedando en una zona con excelente proyección urbanística y de muy alta valorización. Donde vivirás en un ecosistema rodeado de ambientes naturales que te brinda bienestar para la salud de la familia ",
        images:[
            'https://i.ibb.co/f4CmqXm/acceso.webp',
            'https://i.ibb.co/YZHXG2f/area-social.webp',
            'https://i.ibb.co/fk5FWgn/cancha-multiple.webp',
            'https://i.ibb.co/C91gfnH/cancha-voley.webp',
            'https://i.ibb.co/WyHTZSL/club-house.webp',
            'https://i.ibb.co/PZS8DKg/eje-vial.webp',
            'https://i.ibb.co/rwNkBg4/general.webp',
            'https://i.ibb.co/c1Sd79X/gimnasio.webp',
            'https://i.ibb.co/W62KcqP/lago.webp',
            'https://i.ibb.co/6RqxCV5/locales.webp',
            //'https://i.ibb.co/1QvFSMr/logo-copia.webp', // logo
            //'https://i.ibb.co/GFnJ1GX/logo.webp',  // logo
            'https://i.ibb.co/wd7bxL9/parque-perros.webp',
            'https://i.ibb.co/xMqWQwF/piscina-adultos.webp',
            'https://i.ibb.co/wpBzj4m/piscina-ninos.webp',
            //'https://i.ibb.co/Fh1g4x5/render.webp',
            'https://i.ibb.co/w6cb66K/restaurante.webp',
            'https://i.ibb.co/V9FqWv5/vista-aerea-locales.webp',
        ],
        asesors: [asesorsData.Vanesa, asesorsData.Sugey],
        relations: [1,2,4],
        video:'https://www.youtube.com/embed/N4vgFCN4l3w',        
        Planos:['https://i.ibb.co/HG30VTw/map.webp'//Ubicación
                ,'https://i.ibb.co/Fh1g4x5/render.webp' //Render
                , 'https://i.ibb.co/7Xwmft3/general.webp' //General

        ]
    },

    //Morro House
    {
        id:4,
        name: 'Morro House',
        slug: 'morro-house',
        slogan : "Condominios",
        price: 564000000,
        city: 'Morros - Tubará',
        address: 'Sobre la via al Mar',
        area: '112 Mt2',
        logo: logoMorroHouse.src,
        imageMain : opcion3.src, //'https://i.ibb.co/0f25XS1/morroshouse1.webp',
        imageMain2 : portada.src,
        amenitiesInteriors:[
            {
                name: "Habitaciones",
                quantity: "2",
                icon: bedrooms
            },
            {
                name: "Baños",
                quantity: "2",
                icon: bathrooms
            }
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool
            },
            {
                name: "Lotes",
                quantity: 120,
                icon:area
            },
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:parking
            },
            {
                name: "Parque de Mascotas",
                quantity: 1,
                icon:petpark
            },
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
            {
                name: "Cancha Deportiva",
                quantity: 1,
                icon:court
            },
            {
                name: "Salon Social",
                quantity: 1,
                icon:salon
            },
            {
                name: "Jacuzzi",
                quantity: 1,
                icon:jacuzzi
            },
            {
                name: "Zona Bbq",
                quantity: 1,
                icon:bbq
            }
        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73529.64609763991!2d-74.98098466697314!3d10.954792634128202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef67f2d4e983da3%3A0xa2b40d082a1b8768!2sMORROS%20HOUSE%20CONDOMINIO!5e0!3m2!1ses-419!2sus!4v1678583830020!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.lanzamiento.label],
        extract:"",
        body:"MORRO HOUSE CONDOMINIO es un conjunto cerrado conformado por casas de uno, dos y tres niveles con una propuesta única en el sector de la vía al mar, ya que cada propietario tendrá el privilegio de gozar de una imponente vista panorámica a toda la marina de puerto velero, y Puerto Colombia gracias a su privilegiada ubicación en el sector el Morro. Está conformado por 95 casas de 120 mts construido de 1 nivel , casa de 2 niveles de 146 mts construido y 3 niveles de 224 mts construidos. ***NOTA: Los precios dependen del Metraje y niveles de cada casa***",
        images:[
            //'https://i.ibb.co/ZJvBTwh/florencia-casa.webp',
            //'https://i.ibb.co/C6Dr8RZ/florencia-plano.webp',
            //'https://i.ibb.co/pdqMgSM/Logo-morros-house.webp', //logo
            //'https://i.ibb.co/SwB5KVc/mapa-morros.webp',
            'https://i.ibb.co/MfHDbfj/Morros-house-RENDERPISCINA.webp',
            'https://i.ibb.co/sF22NWm/morros-house-ZONA-COMUN.webp',
            'https://i.ibb.co/3Sm526q/Morros-house-ACCESO-1.webp',
            'https://i.ibb.co/kM9Y8K7/Morros-house-ZONACOMUN.webp',
            opcion3.src
            //,'https://i.ibb.co/0f25XS1/morroshouse1.webp',
            ,'https://i.ibb.co/jz5xws0/morroshouse2.webp',
            //'https://i.ibb.co/6mbBPYx/plana-general.webp',
            //'https://i.ibb.co/mH01K33/plana.webp',
            //'https://i.ibb.co/DKRSJRG/santorini-casa.webp',
            //'https://i.ibb.co/FgfBj5G/santorini-planta.webp',
            'https://i.ibb.co/SrSCXDV/venecia-1.webp',
            //'https://i.ibb.co/6yv8rBB/venecia-planta.webp',
            //'https://i.ibb.co/j839gVF/venevia-casa.webp',
        ],
        asesors: [asesorsData.Vanesa, asesorsData.Guzman],
        relations: [2,3,5],
        video:'https://www.youtube.com/embed/cPVQg5FMe3g',
        PlanoMapa : mapamorrohouse.src,
        Planos:[
            //'https://i.ibb.co/6mbBPYx/plana-general.webp'//Plano General,
            
            ,'https://i.ibb.co/6yv8rBB/venecia-planta.webp'//Plano casa Venecia,
            ,'https://i.ibb.co/FgfBj5G/santorini-planta.webp'//Plano casa Santorini
            ,'https://i.ibb.co/C6Dr8RZ/florencia-plano.webp' //Planos Casa Florencia   
            , planosflorencia2niveles.src
            , planosVenecia1niveles.src
            , planosflorencia3niveles.src

            ]
    },

     //Tribeca
     {
        id:5,
        name: 'Tribeca',
        slug: 'tribeca',
        slogan : "Condominios",
        //price: 2506000000,
        city: 'Pradomar',
        address: 'Sobre la via al Mar',
        area: '600 Mt2',
        logo:'https://i.ibb.co/pwzrB3z/new-logo-tribeca.webp',
        //imageMain : 'https://i.ibb.co/BLYKk8D/tribeca2.webp',
        imageMain : 'https://i.ibb.co/6HDbpsz/IMG-6897.webp',
        amenitiesInteriors:[
            {
                name: "Habitaciones",
                quantity: "3",
                icon: "cil:bed"
            },
            {
                name: "Baños",
                quantity: "3",
                icon:"cil:bath"
            }
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool
            },
            {
                name: "Garita de acceso",
                quantity: 1,
                icon:road
            },
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:parking
            },
            {
                name: "Parque de Mascotas",
                quantity: 1,
                icon:petpark
            },
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Cir. Cerrado,Video Portero",
                quantity: 1,
                icon:cctv
            }
        ],
        mapa: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62675.44831055904!2d-75.06611437645533!3d10.947086209255014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef67f2d4e983da3%3A0xa2b40d082a1b8768!2sMORROS%20HOUSE%20CONDOMINIO!5e0!3m2!1ses-419!2sus!4v1678582050500!5m2!1ses-419!2sus`,
        tags: [nameTags.finalizado.label],
        extract:"",
        body: "La relación con la naturaleza es intrínseca al género humano, la evolución de los centros urbanos con una elevada densidad de la población ha ido debilitando rogresivamente este lazo único AP UNIDOS ha querido incorporar al hogar en todos sus proyectos de vivienda los espacios al aire libre en un intento significativo de restaurar el vínculo con la naturaleza o por lo menos con el exterior, considerado un privilegio, especialmente cerca de la grandes ciudades . El acceso a un espacio exterior en la privacidad de la vivienda es una VENTAJA que puede aprovecharse de muchas formas, es posible transformar terrazas ,balcones jardines y patios ,sin que importe el tamaño ,en lugares relajantes para la contemplación del mar o en fuentes de luz que lleguen hasta los espacios interiores de la casa; atreves de materiales naturales ,como la madera la piedra y el ladrillo ,formar los cimientos ,las paredes y los techos de estos espacios lujosos,sensibles y seductores ,mientras que la propia naturaleza desempeña un papel que es la complementaria y estrechamente ligada a la obra de TRIBECA. Aprovechamos al máximo los espacios que permitan una mejor relación entre el espacio exterior con el interior. TRIBECA es un proyecto con grandes terrazas con materiales con un bajo costo de mantenimiento, en donde se disfruta una relación mucho más directa con el mar; incorporar sala, comedor e incluso la cocina que se confundan con la vegetación circundante y abarcar vistas panorámicas. En espacios abiertos o cubiertos ,grandes o pequeños dejando estas zonas de ser espacios aburridos e inútiles para convertirse en espacios cómodos en los que poder relajarse y disfrutar del clima y en entorno es la apuesta de AP UNIDOS a la demanda y exigencias de los que verdaderamente quieran vivir FELIZ las posibilidades para diseñar o modificar el espacio en una vivienda es limitada ,si se enfrenta a restricciones sobre superficies edificadas o sobre el terreno en el que se va a edificar; también limitaciones económicas y de normativa ,pero aun así APUNIDOS creo TRIBECA con una propuesta innovadora original que se adapta a todos estos requerimientos y exigencias. Mejorar la distribución de los espacios hacer que sus uso sea más racional, sacar el máximo partido a los espacios en una construcción muy particular que permite jugar con los materiales, la forma y la estética buscando finalmente que los colores y materiales utilizados se salgan de los estandartes y no estar sujetos a las mismas limitaciones que una residencia tradicional con elementos diferenciadores y personalidad propia. TRIBECA es la apuesta de APUNIDOS PARA VIVIR COMODAMENTE Y FELiZ",
        images:[
            // "https://i.ibb.co/GRcY86N/1-PISO-SOTANO-TRIBECA-BEACH.webp",
            // "https://i.ibb.co/1J5BC03/2-PISO-NIVEL-1-TRIBECA-BEACH.webp",
            // "https://i.ibb.co/fCm4Mwk/3-PISO-NIVEL-2-TRIBECA-BEACH.webp",
            // "https://i.ibb.co/mvPQFCQ/4-PISO-ALTILLO-TRIBECA-BEACH.webp",
            // "https://i.ibb.co/8bMr5gR/altillo.webp",
            // "https://i.ibb.co/RDVVr4S/AREA-01.webp",
            // "https://i.ibb.co/7NLDtVG/AREA-02.webp",
            // "https://i.ibb.co/mv57mD1/card.webp",
            // "https://i.ibb.co/8Dpv7Wf/logo-tribeca.webp",
            // "https://i.ibb.co/vZxV85J/PLANTA-PISO-1.webp",
            // "https://i.ibb.co/jJ4qvQy/PLANTA-PISO-2.webp",
            // "https://i.ibb.co/YZymcrB/PLANTA-PISO-ALTILLO.webp",
            // "https://i.ibb.co/2tYjMTH/planta1piso.webp",
            // "https://i.ibb.co/qpj83K0/planta2piso.webp",
            // "https://i.ibb.co/C1G7wCW/plantasotano.webp",
            // "https://i.ibb.co/NZ3pJmT/PLANTAS-CASA-TIPO.webp",
            // "https://i.ibb.co/jRct3yn/RENDER-1-0.webp",
            // "https://i.ibb.co/1r6LPgw/RENDER-2-0.webp",
            // "https://i.ibb.co/xLCxJkt/RENDER-3-0.webp",
            // "https://i.ibb.co/SNvHLFY/SOTANO.webp",
            // "https://i.ibb.co/Y3BnmS6/tribeca-1.webp",
            // "https://i.ibb.co/tz9qzNC/tribeca-2.webp",
            // "https://i.ibb.co/vdJXBc5/tribeca-3.webp",
            // "https://i.ibb.co/6XcsmwC/tribeca-4.webp",
            // "https://i.ibb.co/1bw4z3m/tribeca-5.webp",
            // "https://i.ibb.co/GRD7fCq/tribeca-6.webp",
            // "https://i.ibb.co/rp5qJPc/tribeca-7.webp",
            // "https://i.ibb.co/XSyYW0y/tribeca-8.webp",
            // "https://i.ibb.co/kyPd3nz/tribeca-9.webp",
            // "https://i.ibb.co/P4VvdFh/tribeca1.webp",
            // "https://i.ibb.co/BLYKk8D/tribeca2.webp",
            // "https://i.ibb.co/vLcScy1/tribeca3.webp",
            // "https://i.ibb.co/g6ZLdXw/tribeca5.webp",
            // //"https://i.ibb.co/LQrsd0k/tribeca6.webp",
            // "https://i.ibb.co/1QC0dZn/tribeca7.webp",
            // "https://i.ibb.co/MnzhcZY/tribeca8.webp",
            // "https://i.ibb.co/D1JSqT7/tribeca9.webp",
            // "https://i.ibb.co/HpVrSgX/tribeca10.webp",
            // "https://i.ibb.co/RcSb4ck/tribeca11.webp",





            "https://i.ibb.co/KN54Bgs/DJI-0047.webp",
            "https://i.ibb.co/GCJRnmG/DJI-0056.webp",
            "https://i.ibb.co/DgKKK5z/DJI-0064.webp",
            "https://i.ibb.co/TtV9Q03/IMG-2146.webp",
            "https://i.ibb.co/RHgJN7v/IMG-2151.webp",
            "https://i.ibb.co/w6xwrqC/IMG-2155.webp",
            "https://i.ibb.co/dtZXRzh/IMG-2158.webp",
            "https://i.ibb.co/rfNzhWY/IMG-2179.webp",
            "https://i.ibb.co/wKD94vq/IMG-2182.webp",
            "https://i.ibb.co/Lz4Gnwr/IMG-2188.webp",
            "https://i.ibb.co/kJjySB7/IMG-2196.webp",
            "https://i.ibb.co/QM8GqmS/IMG-2203.webp",
            "https://i.ibb.co/YDJSnJg/IMG-2213.webp",
            "https://i.ibb.co/z23MGyB/IMG-2214.webp",
            "https://i.ibb.co/F35rvsm/IMG-2222.webp",
            "https://i.ibb.co/mvXY9Y5/IMG-2223.webp",
            "https://i.ibb.co/19XwkTj/IMG-2225.webp",
            "https://i.ibb.co/Y3YWXJY/IMG-2235.webp",
            "https://i.ibb.co/sjC25dv/IMG-2247.webp",
            "https://i.ibb.co/D4kzHNb/IMG-2255.webp",
            "https://i.ibb.co/YL9kSrJ/IMG-6896.webp",
            "https://i.ibb.co/6HDbpsz/IMG-6897.webp",
            "https://i.ibb.co/H2yw8bF/IMG-6902.webp",
            "https://i.ibb.co/x8WjVm0/IMG-6922.webp",
            "https://i.ibb.co/FhyTc1z/IMG-6962.webp",
            "https://i.ibb.co/WBGXnr3/IMG-6971.webp",
            "https://i.ibb.co/0VfVXVN/IMG-6979.webp",
            "https://i.ibb.co/y6sPRj7/IMG-6980.webp",
            "https://i.ibb.co/6tHQm6H/IMG-8269.webp",





        ],
        asesors: [asesorsData.Eliana, asesorsData.Vanesa],
        relations: [1,3,4],
        Planos:[//'https://i.ibb.co/2tYjMTH/planta1piso.webp' //Plantas Aquitectónicas 1er.nivel
                //, 'https://i.ibb.co/qpj83K0/planta2piso.webp'//Plantas Aquitectónicas 2do.nivel
                //,'https://i.ibb.co/8bMr5gR/altillo.webp' //Planta Altillo
                //, 'https://i.ibb.co/sqZDxv5/plantasotano.png' //Planta Sotano
                
                ]
       
    },

    //Riviera del Mar
    {
        id:6,
        name: 'Riviera del Mar',
        slug: 'riviera-del-mar',
        slogan : "Reserva Campestre",
        price: 490000000,
        city: 'Bajo Ostión - Tubará',
        address: 'Km 21 Via al Mar',
        area: '117 Mt2',
        logo:'https://i.ibb.co/Thr1wPT/logo-rdm.webp',
        imageMain : 'https://i.ibb.co/s54hHcy/IMG-7821.webp',
        imageMain2 : 'https://i.ibb.co/s54hHcy/IMG-7821.webp',
        imageCarousel:'https://i.ibb.co/Jk3XTqH/riviera-Comedor.webp',
        amenitiesInteriors:[
            {
                name: "Habitaciones",
                quantity: "1-3",
                icon: bedrooms
            },
            {
                name: "Baños",
                quantity: "2",
                icon: bathrooms
            }
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool
            },
            {
                name: "Lotes",
                quantity: "180-250 mt2",
                icon:units
            },
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:parking
            },
            {
                name: "Parque de Mascotas",
                quantity: 1,
                icon:petpark
            },
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
            {
                name: "Garita Acceso",
                quantity: 1,
                icon:road
            },
            {
                name: "Zona bbq",
                quantity: 1,
                icon:bbq
            },
            {
                name: "Cerramiento Muro",
                quantity: 1,
                icon:wall
            },
            {
                name: "Local",
                quantity: 1,
                icon:comercialstore
            },
            {
                name: "Entrada Sist.Electronica",
                quantity: 1,
                icon:electronicdoor
            },
            {
                name: "Cir. Cerrado en la Garita",
                quantity: 1,
                icon:cctv
            }
        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16728.46374153509!2d-74.99667102662768!3d10.961694368714033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef67f18f7528bfb%3A0xca3de7accd5da27c!2sRIVIERA%20DEL%20MAR%20RESERVA%20CAMPESTRE!5e0!3m2!1ses-419!2sus!4v1679803602231!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.construccion.label],
        extract:"",
        body:"Riviera Del Mar,  (Etapa 1 Exito en ventas) Etapa 2 en VENTA Ofrece un estilo de vivienda que  más crece en el entorno de las ciudades del siglo XXI y sintetiza lo mejor de la arquitectura actual;  funcionalidad y eficiencia. Ubicado en el Km 21 vía al mar ( Barranquilla-Cartagena)  a 7 minutos de playas como la marina de puerto velero , caño dulce y puerto Colombia ,a tan solo 15 minutos Barranquilla y a 40 minutos de Cartagena. RIVIERA DEL MAR  busca entregar un espacio  para la familia y amigos, ampliando los límites de la arquitectura y ofreciendo experiencias arquitectónicas con un nuevo estilo de vida; siendo la mejor opción para aquellas personas que desean disponer de una vivienda alejada del ruido y la contaminación de las grandes urbes. RIVIERA DEL MAR está úbicada en una zona de excelente proyección urbanística  y de muy  alta valorización. ",
        images:[
            //'https://i.ibb.co/ByX3MXD/PLANTA-ETAPA-1.webp',  //renderplanogeneral
            //'https://i.ibb.co/QCK41DZ/riviera-Casa-frente.webp',
            //'https://i.ibb.co/nftjN2V/riviera-Entrada.webp',
            //'https://i.ibb.co/vXhZ3c5/riviera-Ban-o2.webp',
            //'https://i.ibb.co/Zzcsm9W/riviera-index2.webp',
            //'https://i.ibb.co/1JhJ5cq/riviera-Patio-1.webp',
            
            //'https://i.ibb.co/1MLydg0/planorivieraactual.webp',
            
            //'https://i.ibb.co/Dtd1R9Z/SGS.webp',  //foto vigilado
            //'https://i.ibb.co/7gHZ8s8/riviera-Zona-parking.webp',
            //'https://i.ibb.co/x5HwvPN/riviera-Casa-3.webp',
            //'https://i.ibb.co/GRDJvPL/riviera-index.webp', //publicidad
            //'https://i.ibb.co/Bnpq20J/riviera-Sala-5.webp',
            //'https://i.ibb.co/X34T5pG/riviera-Cocina.webp',
            //'https://i.ibb.co/9thHDMS/casa-tipo-3.webp',
            //'https://i.ibb.co/PZwpXyr/casa-tipo-2.webp',
            //'https://i.ibb.co/Jk3XTqH/riviera-Comedor.webp',
            //'https://i.ibb.co/r0KC532/casa-tipo-1.webp',




            "https://i.ibb.co/7XR4SWt/2.webp",
            "https://i.ibb.co/StFQmp2/3331.webp",
            "https://i.ibb.co/Y7z6zky/DJI-0005.webp",
            "https://i.ibb.co/C6wDpJq/DJI-0007.webp",
            "https://i.ibb.co/Pr3Qqg4/DJI-0017.webp",
            "https://i.ibb.co/FX1tcRc/DJI-0023.webp",
            "https://i.ibb.co/xLvjw71/IMG-0855.webp",
            "https://i.ibb.co/TPjNKXm/IMG-7811.webp",
            "https://i.ibb.co/s54hHcy/IMG-7821.webp",
            "https://i.ibb.co/YjhpNyk/IMG-7863.webp",
            "https://i.ibb.co/ZJBSGJw/IMG-7955.webp",
            "https://i.ibb.co/2N2sNgV/IMG-7960.webp",
        ],
        asesors: [asesorsData.Vanesa, asesorsData.Guzman],
        relations: [2,3,4],
        video:'https://www.youtube.com/embed/1VGZIoZTQ7U',
        supervicion:'https://i.ibb.co/Dtd1R9Z/SGS.webp',
        Planos:['https://i.ibb.co/1MLydg0/planorivieraactual.webp'//Plano General
                ,'https://i.ibb.co/9thHDMS/casa-tipo-3.webp'//Casa Tipo 3
                ]
    },

    //PROYECTOS FINALIZADOS

    //Monteflores
    {        
        id:7,
        name: 'Monteflores',
        slug: 'monteflores',
        slogan : "Condominio Campestres",
        //price: 260000000,
        city: 'Bajo Ostión',
        address: 'Km 21 via al mar',
        area: '90 Mt2',        
        logo:'https://i.ibb.co/BwB6wVH/logo-monteflores.gif',
        tipo:"casas",
        fase: "",   
        imageMain:'https://i.ibb.co/2YmPQJ9/monteflores16.webp',
        imageCarousel:'https://i.ibb.co/59XsxHr/monteflores5.webp',             
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool ,
            },
            
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:'cil:garage' ,
            },
        
            {
                name: "Parque Infantil",
                quantity: 1,
                icon:playground
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
        
            {
                name: "Salon Social",
                quantity: 1,
                icon:salon
            },
            
            {
                name: "Garita de acceso",
                quantity: 1,
                icon:road
            },
            {
                name: "Cerramiento en Muro",
                quantity: 1,
                icon:wall
            }

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11311.719445749926!2d-74.98624883497818!3d10.963980691937818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef67fc05ee4d543%3A0xd298da06700d390e!2sMonteflores%20condominio%20campestre!5e0!3m2!1ses-419!2sus!4v1679811189589!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.finalizado.label],
        extract:"MonteFlores se encuentra ubicada a 20 minutos de Barranquilla...",
        body:"MonteFlores se encuentra ubicada a 20 minutos de Barranquilla, en una de zona de alta valorización y crecimiento de la región turística de la Costa Caribe Colombiana, en la zona de Bajo Ostión a 2 km del peaje de Puerto Colombia, vía al mar Cartagena – Barranquilla.", 
        images:[
            
        'https://i.ibb.co/C7rSN50/monteflores1-1.webp',
        'https://i.ibb.co/stfMsCc/monteflores-7.webp',
        'https://i.ibb.co/QPPHW1G/monteflores12.webp',
        'https://i.ibb.co/bLKNL0F/monteflores4.webp',
        'https://i.ibb.co/59XsxHr/monteflores5.webp',
        'https://i.ibb.co/0Bkf8PB/monteflores13.webp',
        'https://i.ibb.co/2FWFJqg/monteflores11.webp',
        'https://i.ibb.co/850B5QH/monteflores7.webp',
        'https://i.ibb.co/wCXCm1K/monteflores6.webp',
        'https://i.ibb.co/82mfzK1/monteflores14.webp',
        'https://i.ibb.co/zVk99R7/monteflores10.webp',
        'https://i.ibb.co/Hg6drQh/monteflores2.webp',
        'https://i.ibb.co/N2VxRBM/monteflores3.webp',
        'https://i.ibb.co/RgHMyjk/monteflores15.webp',
        'https://i.ibb.co/Nxp3cqF/monteflores17.webp',
        'https://i.ibb.co/2YmPQJ9/monteflores16.webp',
        'https://i.ibb.co/7jJnFHd/monteflores18.webp',
        'https://i.ibb.co/F4F5h2v/monteflores30.webp',
        'https://i.ibb.co/P6GXRvc/monteflores24.webp',
        'https://i.ibb.co/dKJ2pxG/monteflores19.webp',
        'https://i.ibb.co/F33RNb3/monteflores25.webp',
        'https://i.ibb.co/cYzDB4D/monteflores21.webp',
        'https://i.ibb.co/QHcYbHJ/monteflores20.webp',
        'https://i.ibb.co/VHSjrW5/monteflores22.webp',
        'https://i.ibb.co/q78YHp1/monteflores8.webp',
        'https://i.ibb.co/c6013hh/monteflores9.webp',
        'https://i.ibb.co/NsBy79d/monteflores23.webp',
        ],
        asesors: [asesorsData.Vanesa]   
    },

    //Balboa
    {        
        id:8,
        name: 'Balboa Campestre',
        slug: 'balboa',
        slogan : "Conjunto Cerrado",
        //price: 490000000,
        city: 'Puerto Colombia',
        address: 'cra 18c #2-59',
        area: '134 Mt2',        
        logo:'https://i.ibb.co/gJKnnvM/logo-balboa.webp',
        tipo:"casas",
        fase: "",   
        imageMain:'https://i.ibb.co/m4bmk22/rm1.webp',
        imageCarousel:'https://i.ibb.co/w7vWWH0/Balboa-index.webp',             
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool ,
            },
            
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:'cil:garage' ,
            },
        
            {
                name: "Video Porteria",
                quantity: 1,
                icon:cctv
            },
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
        
            

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4744943423148!2d-74.95052308517565!3d11.002981892168014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42b5335a12b07%3A0x56c9b7771cc45f8e!2sBalboa%20Campestre!5e0!3m2!1ses-419!2sus!4v1679811655151!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.finalizado.label],
        extract:"Balboa Campestre se encuentra ubicada en Puerto Colombia - Cra 18c #2-59",
        body:"Balboa Campestre se encuentra ubicada en Puerto Colombia - Cra 18c #2-59, en una de zona de alta valorización y crecimiento de la región turística de la Costa Caribe Colombiana, en la zona de Bajo Ostión a 2 km del peaje de Puerto Colombia, vía al mar Cartagena – Barranquilla.", 
        images:[
            
            'https://i.ibb.co/RTw2VGS/bb1.webp',
            'https://i.ibb.co/kDxYTDK/bb3.webp',
            'https://i.ibb.co/XtCDx68/bb2.webp',
            'https://i.ibb.co/JvvXRJX/bb7.webp',
            'https://i.ibb.co/bLK4wsv/bb5.webp',
            'https://i.ibb.co/86jGCMJ/bb4.webp',
            //'https://i.ibb.co/gJKnnvM/logo-balboa.webp',
            'https://i.ibb.co/m4bmk22/rm1.webp',
            'https://i.ibb.co/w7vWWH0/Balboa-index.webp',
            'https://i.ibb.co/0qZP5sM/balboa-Inicio.webp',
            'https://i.ibb.co/qsmnkCR/bb8.webp',
        ],
        asesors: [asesorsData.Eliana]     
    },

    //Caraibi
    {        
        id:9,
        name: 'Edificio Caraibi',
        slug: 'caraibi',
        slogan : "Edificio",
        //price: 490000000,
        city: 'Atlántico',
        address: 'Puerto Colombia',
        //area: '134 Mt2',        
        logo:'https://i.ibb.co/qMYyc7R/Logo-Caraibi.gif',
        tipo:"apartamentos",
        fase: "",   
        imageMain:'https://i.ibb.co/3STPLtr/1-3.webp',
        imageCarousel:'https://i.ibb.co/3STPLtr/1-3.webp',             
        amenitiesInteriors:[],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool ,
            },
            
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:'cil:garage' ,
            },
        
            
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
        
            

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4624728116914!2d-74.95452877600782!3d11.003886367114813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42b7e476e41a1%3A0x61539e2bc9f3f8b9!2sEDIFICIO%20CARAIBI!5e0!3m2!1ses-419!2sus!4v1679812592839!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.finalizado.label],
        extract:"",
        body:"11 Apartamentos con vista al mar, Cuenta con piscina y parqueaderos; ubicado en Puerto Colombia, Atlántico, Colombia.", 
        images:[
            
            'https://i.ibb.co/3STPLtr/1-3.webp',
            'https://i.ibb.co/NNVDRz2/caraiby1-4-1.webp',
            'https://i.ibb.co/T2tqnqL/caraiby-2.webp',
            
        ]     
    },

    //Sulmare
    {        
        id:10,
        name: 'Sulmare',
        slug: 'sulmare',
        slogan : "Conjunto Cerrado",
        //price: 490000000,
        city: 'Atlántico',
        address: 'Puerto Colombia',
        //area: '134 Mt2',        
        //logo:'https://i.ibb.co/qMYyc7R/Logo-Caraibi.gif',
        tipo:"casas",
        fase: "",   
        imageMain:'https://i.ibb.co/Yt2Fxb8/CONJUNTO-RESIDENCIAL-SULMARE.webp',
        imageCarousel:'https://i.ibb.co/Yt2Fxb8/CONJUNTO-RESIDENCIAL-SULMARE.webp',             
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            {
                name: "Piscina - Piscina Niños",
                quantity: 1,
                icon: pool ,
            },
            
            {
                name: "Parqueaderos Visitantes - Privados",
                quantity: 1,
                icon:'cil:garage' ,
            },
        
            
            {
                name: "Zonas Verdes",
                quantity: 1,
                icon:greenzone
            },
        
            

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31332.006464025235!2d-74.98314435143915!3d11.001001850753306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42a97b22d6d93%3A0x1fda887477b87026!2sPuerto%20Colombia%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1679813055528!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.finalizado.label],
        extract:"",
        body:"Conjunto residencial cerrado, 5 casas Cuenta con piscina y hermosa vista al mar Puerto Colombia, Atlántico, Colombia.", 
        images:[
            
            'https://i.ibb.co/LhCV4c4/CONJUNTO-RESIDENCIAL-SULMARE-1.webp',
            'https://i.ibb.co/fXwJhY4/sulmare3.webp',
            'https://i.ibb.co/02pG39q/SULMARE-2.webp',
            'https://i.ibb.co/Yt2Fxb8/CONJUNTO-RESIDENCIAL-SULMARE.webp',
            
        ],        
    },

    //PERLA DEL PRADO MAR
    {        
        id:11,
        name: 'PERLA DEL PRADO MAR',
        slug: 'perla-del-prado-mar',
        slogan : "Conjunto Residencial",
        //price: 490000000,
        city: 'Atlántico',
        address: 'Puerto Colombia',
        //area: '134 Mt2',        
        //logo:'https://i.ibb.co/qMYyc7R/Logo-Caraibi.gif',
        tipo:"casas",
        fase: "",   
        imageMain:'https://i.ibb.co/WK5ZPLn/CONJUNTO-RESIDENCIAL-PERLA-DE-PRADOMAR.webp',
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            
          
        
            

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31332.006464025235!2d-74.98314435143915!3d11.001001850753306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42a97b22d6d93%3A0x1fda887477b87026!2sPuerto%20Colombia%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1679813055528!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.finalizado.label],
        extract:"",
        body:"Conjunto residencial cerrado, Puerto Colombia, Atlántico, Colombia.", 
        images:[
            
            'https://i.ibb.co/WK5ZPLn/CONJUNTO-RESIDENCIAL-PERLA-DE-PRADOMAR.webp',
            
        ]     
    },

    //VILLA NATALY
    {        
        id:12,
        name: 'VILLA NATALY',
        slug: 'villa-nataly',
        slogan : "Conjunto Residencial",
        //price: 490000000,
        city: 'Atlántico',
        address: 'Puerto Colombia',
        //area: '134 Mt2',        
        //logo:'https://i.ibb.co/qMYyc7R/Logo-Caraibi.gif',
        tipo:"casas",
        fase: "",   
        imageMain:'https://i.ibb.co/p2zbtjx/CONJUNTO-RESIDENCIAL-VILLA-NATALY.webp',
        amenitiesInteriors:[
            
        ],
        amenitiesExteriors:[
            
          
        
            

        ],
        mapa:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31332.006464025235!2d-74.98314435143915!3d11.001001850753306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42a97b22d6d93%3A0x1fda887477b87026!2sPuerto%20Colombia%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1679813055528!5m2!1ses-419!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
        tags: [nameTags.finalizado.label],
        extract:"",
        body:"Conjunto cerrado, Puerto Colombia, Atlántico, Colombia.", 
        images:[
            
            'https://i.ibb.co/p2zbtjx/CONJUNTO-RESIDENCIAL-VILLA-NATALY.webp',
            
        ]     
    },
];

/*
Tribeca Enlaces Directos

https://i.ibb.co/2ZvTMwd/fachada.jpg
https://i.ibb.co/BGrP159/tribeca-2.jpg
https://i.ibb.co/Ss5hpYS/tribeca1.png
https://i.ibb.co/f8Zfz34/tribeca2.png
https://i.ibb.co/gR76zKx/tribeca3.png
https://i.ibb.co/LnK8Yhj/tribeca5.png
https://i.ibb.co/27mnThs/tribeca6.png
https://i.ibb.co/xCkYCGM/tribeca7.png
https://i.ibb.co/f88LrCc/tribeca8.png
https://i.ibb.co/Vw010R8/tribeca9.png
https://i.ibb.co/N7kJzR1/tribeca10.png
https://i.ibb.co/p0VynnM/tribeca11.png


Bosques de la Riviera

https://i.ibb.co/DDqXkfG/2.jpg
https://i.ibb.co/z8gRbK1/1.jpg
https://i.ibb.co/JFqJDDP/3.jpg
https://i.ibb.co/Px5N3jQ/bosques-2.png
https://i.ibb.co/VqqWfWp/bosques-3.png
https://i.ibb.co/gvFfC0q/bosques-4.png
https://i.ibb.co/Y26Gs5D/bosques-5.png
https://i.ibb.co/LpFGR3d/bosques1.jpg
https://i.ibb.co/K9rJNwX/bosques2.jpg
https://i.ibb.co/XzPtRnX/bosques3.jpg
https://i.ibb.co/qyQXDsJ/bosques4.jpg
https://i.ibb.co/YXDZbpQ/bosques5.jpg
https://i.ibb.co/1mCw0Nw/LOG-DE-PROYECTO.png
https://i.ibb.co/TqyTqDq/ubicacion.jpg

Altos de la Riviera

https://i.ibb.co/8gRr26g/altos-index.png
https://i.ibb.co/brHZ3vJ/altos-index2.jpg
https://i.ibb.co/v4M2LVd/foto1.jpg
https://i.ibb.co/H47XqYb/foto3.jpg
https://i.ibb.co/YZ7chFK/foto4.jpg
https://i.ibb.co/Bgz0qbf/foto5.jpg
https://i.ibb.co/nfDJ57X/foto6.jpg
https://i.ibb.co/jMt9q5y/foto7.jpg
https://i.ibb.co/PCVvh3Q/foto8.jpg
https://i.ibb.co/svgL0KR/foto11.jpg
https://i.ibb.co/9tFbZ2Y/foto14.jpg
https://i.ibb.co/qs55tNR/LOGO-DE-ALTOS-VECTOR.png
https://i.ibb.co/M9g5k7r/planos-comercial-fina.png


Altos de los Morros

https://i.ibb.co/r74QV08/area-social.jpg
https://i.ibb.co/k1NFQPf/cancha-multiple.jpg
https://i.ibb.co/LJJZk6L/cancha-voley.jpg
https://i.ibb.co/qn6sHZx/club-house.jpg
https://i.ibb.co/tXWGMmx/eje-vial.jpg
https://i.ibb.co/St9tKYP/general.jpg
https://i.ibb.co/t2z2YrD/gimnasio.jpg
https://i.ibb.co/qgTSJn6/lago.jpg
https://i.ibb.co/bKFvZ6D/locales.jpg
https://i.ibb.co/qd1nrp4/map.jpg
https://i.ibb.co/JnCZbpz/parque-perros.jpg
https://i.ibb.co/1XgXXdM/piscina-adultos.jpg
https://i.ibb.co/TH3cgSx/piscina-ninos.jpg
https://i.ibb.co/bmFKtsB/render.png
https://i.ibb.co/z8yzhRx/restaurante.jpg
https://i.ibb.co/Bzh8MBZ/vista-aerea-locales.jpg

Morros Houses

https://i.ibb.co/y8w71cc/florencia-casa.jpg
https://i.ibb.co/4WwLNsr/florencia-plano.jpg
https://i.ibb.co/Sw1Msr3/Logo-morros-house.jpg
https://i.ibb.co/FbsCzYs/mapa-morros.png
https://i.ibb.co/98G7Dd0/morros-comedor.jpg
https://i.ibb.co/bgNmPM1/morros-1.jpg
https://i.ibb.co/LkfRTzv/morros-2.jpg
https://i.ibb.co/Bc1TCD9/morros-cocina.jpg
https://i.ibb.co/0yyZdsB/morros-habitacion.jpg
https://i.ibb.co/k4VS34j/Morros-house-RENDERPISCINA.jpg
https://i.ibb.co/1sTJdqM/morros-house-ZONA-COMUN.jpg
https://i.ibb.co/PQGNt5Z/Morros-house-ACCESO-1.jpg
https://i.ibb.co/5WvQtXn/Morros-house-ZONACOMUN.jpg
https://i.ibb.co/5B3C4RT/morros-sala.jpg
https://i.ibb.co/H4h2cHH/morroshouse1.png
https://i.ibb.co/9rDvNcc/morroshouse2.png
https://i.ibb.co/Ks47p93/plana-general.jpg
https://i.ibb.co/BzB0s7L/plana.webp
https://i.ibb.co/X2QsDkT/santorini-casa.jpg
https://i.ibb.co/mNWjDQt/santorini-planta.jpg
https://i.ibb.co/Fx47b7x/venecia-1.jpg
https://i.ibb.co/YfHSrq4/venecia-planta.jpg
https://i.ibb.co/7vd644t/venevia-casa.jpg

*/