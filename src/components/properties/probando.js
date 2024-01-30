import { Projects } from '../../data/Projects';

const newProjects = Projects.filter((project) => project.tags.includes('lanzamiento'))
    
const projects = Projects.filter((project) => project.tags.includes('lanzamiento'))
// const projects = newProjects.map((
//     {
//         name,
//         tags,
//         price,
//         address,
//         city,
//         area,
//         slogan,
//         slug,
//         imageMain,
//         amenitiesInteriors,
//     }) => {
//     return 
//     ({
//         name,
//         tags,
//         price,
//         address,
//         city,
//         area,
//         slogan,
//         slug,
//         imageMain,
//         amenitiesInteriors,
//     })    
// })

export default projects;




