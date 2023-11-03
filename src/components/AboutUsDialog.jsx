import React from 'react'
import { Dialog } from './Dialog'
import { useAboutUs } from '../hooks/useAboutUs'

export const AboutUsDialog = () => {
  const { setAboutUsOpen } = useAboutUs()
  const closeAboutUs = () => {
    setAboutUsOpen(false)
  }
  return (

    <Dialog closeFunction={closeAboutUs}>
      <h1 className='z-10 text-4xl md:text-6xl text-black font-extrabold drop-shadow-lg mb-6'>Sobre nosotros</h1>
      <div className='text-sm md:text-lg flex flex-col gap-5 mt-8 transition-all'>
        <p>
          Somos una empresa destinada a la confección y venta de uniformes escolares y liceales gestionado por dos alumnos de tercer grado de administración.
          Es un proyecto que apunta a satisfacer las necesidades de los estudiantes, teniendo en cuenta la importancia que tiene el uso de uniformes al crear una identificación de igualdad, al promover la imagen y los valores de la institución a la que concurren.
        </p>

        <p>
          Para los gestores de esta empresa es muy importante la mano de obra artesanal y la producción uruguaya, creen que mejora la economía del país.
          Por otra parte, con telas de calidad para mayor durabilidad, colaboran para evitar que se malgasten recursos lo que contribuye a disminuir el impacto medioambiental.
        </p>
      </div>
    </Dialog>
  )
}
