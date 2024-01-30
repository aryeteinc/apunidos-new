import { Projects } from '../../data/Projects';

export const Galeries = ({filtro}) => {
    const newProjects = filtro
                  ? Projects.filter((project) => project.tags.includes(filtro.join(',')))
                  : Projects
    const projects = newProjects.map((
      {
        name,
        tags,
        price,
        address,
        city,
        area,
        slogan,
        slug,
        imageMain,
        amenitiesInteriors,
      }) => {
      return 
      ({
        name,
        tags,
        price,
        address,
        city,
        area,
        slogan,
        slug,
        imageMain,
        amenitiesInteriors,
      })
    
    })
  
  return  {projects}
    

}

    