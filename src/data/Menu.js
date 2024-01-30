export const Menu = {
    projects :{
        id: 1,
        label: "Proyectos",
        url: "#",
        level: 0,
        submenu: true,
        items:{
            nuevos:{
                id:1,
                label: "Nuevos",
                url: "/proyectos/nuevos/"
            },
            vigentes:{
                id:2,
                label: "Vigentes",
                url: "/proyectos/vigentes/"
            },
            finalizados:{
                id:3,
                label: "Finalizados",
                url: "/proyectos/finalizados/"
            },
            todos:{
                id:4,
                label: "Finalizados",
                url: "/proyectos/"
            },
        }
    },

    company :{
        id: 2,
        label: "Comapñía",
        url: "#",
        level: 0,
        submenu: true,
        items:{
            about:{
                id:1,
                label: "Acerca de Nosotros",
                url: "/company/about/"
            },
            profesional:{
                id:2,
                label: "Arquitecto",
                url: "/company/profesional"
            }
        }
    },

    legal: {
        id:3,
        label: "Legal",
        url: "/legal/",
        level: 0,
        submenu: false,
    }
};