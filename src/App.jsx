import { NavItem } from './components/NavItem'
import { ProductCard } from './components/ProductCard'
import { Title } from './components/Title'
import { Logo } from './components/logo'

function App () {
  return (
    <div className='min-h-screen m-0'>
      <header className='text-xl z-10 fixed top-0 w-full bg-white h-16 shadow-md'>
        <nav className='flex justify-center gap-2 items-center h-full'>
          <NavItem>Compra ya!</NavItem>
          <NavItem>Sobre nosotros</NavItem>

          <Logo w={40} h={40} />
          <NavItem>Contactanos</NavItem>
          <NavItem>Dona tu ropa</NavItem>
        </nav>
      </header>
      <main className='snap-y snap-proximity overflow-auto h-screen pt-16'>
        <section className='ColoredSection bg-purple-300  items-center'>
          <article className='flex flex-col max-w-2xl items-center'>
            <Title>UniFormas</Title>
            <h2 className='text-3xl font-extrabold text-purple-950 drop-shadow-2xl mb-20 text-center'>Estilo y calidad combinados para acompañar el aprendizaje de tus hijos</h2>
          </article>
          <picture className='invert drop-shadow-2xl'>
            <Logo w={300} h={400} />
          </picture>
        </section>

        <section className='ColoredSection bg-sky-300'>

          <article className='flex flex-col max-w-2xl'>
            <Title>Uniformes de calidad !</Title>
            <h2 className='text-3xl font-extrabold text-sky-950 drop-shadow-lg mb-20'>Para escuelas, colegios y liceos</h2>

            <div className='text-xl font-medium drop-shadow-lg flex flex-col items-center max-w-xl gap-5'>
              <p>Ofrecemos indumentaria del mejor nivel en una amplia variedad de estilos para niños y niñas. ¡Encuentra el estilo perfecto para tus hijos!</p>
              <ul className='mt-10 w-full ml-52'>
                <li className='mb-5 flex items-center'> <img src='nursery.svg' className='h-8 mr-4' />Jardineros personalizados</li>
                <li className='mb-5 flex items-center'><img src='school.svg' className='h-8 mr-4' />Tunicas escolares</li>
                <li className='mb-5 flex items-center'><img src='college.svg' className='h-8 mr-4' />Conjuntos de colegios y liceo</li>
              </ul>
              <button className='bg-sky-700 text-white py-2 px-7 shadow-xl hover:bg-sky-600 active:translate-y-1 active:bg-sky-800'>Comprar</button>
            </div>

          </article>

          <picture className='w-96 flex flex-col'>
            <div className='flex flex-grow'>
              <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 m-0 -rotate-12' />
            </div>
            <div className='flex flex-grow justify-end'>
              <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 rotate-12' />
            </div>
            <div className='flex flex-grow'>
              <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-44 -rotate-12' />
            </div>
          </picture>

        </section>

        <section className='ColoredSection bg-green-300'>

          <article className='flex flex-col max-w-2xl'>
            <Title>Lo mejor para vos y para el planeta!</Title>
            <h2 className='text-2xl font-extrabold text-green-950 drop-shadow-lg mb-20'>
              Prendas confeccionadas con materiales amigables con el medio ambiente
            </h2>
            <div className='text-xl font-medium drop-shadow-lg flex flex-col justify-between items-center max-w-xl gap-5'>
              <p>Enfocamos la produccion para ofrecer la mejor calidad y durabilidad sin dejar de lado ser ecologicos!</p>
              <div className='flex mt-10 gap-10'>
                <picture className='text-center'>
                  <img src='quality.svg' className='w-20' />
                  Calidad
                </picture>
                <picture className='text-center'>
                  <img src='durability.svg' className='w-20' />
                  Durabilidad
                </picture>
                <picture className='text-center'>
                  <img src='ecologic.svg' className='w-20' />
                  Ecologico
                </picture>
              </div>
              <div className='flex gap-16 mt-9'>
                <button className='bg-green-700 text-white py-2 px-7 shadow-xl hover:bg-green-600 active:translate-y-1 active:bg-green-800'>Comprar</button>
                <button className='bg-green-700 text-white py-2 px-7 shadow-xl hover:bg-green-600 active:translate-y-1 active:bg-green-800'>Leer más</button>
              </div>
            </div>
          </article>

          <picture className='w-96 flex flex-col justify-center items-center'>
            <img src='Eco.svg' />
            <div className='flex items-end gap-8' />
          </picture>

        </section>

        <section className='ColoredSection bg-amber-300 flex-col items-center justify-start'>
          <Title>Revisa nuestros productos</Title>

          <section className='w-4/5 flex justify-around'>
            <ProductCard img='jardinero.jpeg' title='Jardinero escolar' fabric='Zephyr' sizes='2 a 6' custom />
            <ProductCard img='tunica.jpg' title='Tunica blanca' fabric='Acrocel' sizes='6 a 14' custom />
            <ProductCard img='uniformeLiceo.jpeg' title='Equipo deportivo liceal / colegio' fabric='Dry Fit' sizes='8 a 16' custom />

          </section>

        </section>
        <footer className='min-w-full px-12 pt-12 flex flex-col justify-center snap-center max-h-fit shadow-inner bg-stone-900 text-white'>
          <section className='flex justify-around gap-10'>
            <article>
              <h2 className=' font-extrabold drop-shadow-2xl text-2xl'>Nuestra empresa</h2>
              <ul className='p-2'>
                <li><a href=''>Sobre nosotros</a></li>
                <li><a href=''>Servicio de donación</a></li>
                <li><a href=''>Confeccion Uruguaya</a></li>
                <li><a href=''>Contactanos</a></li>
              </ul>
            </article>
            <article>
              <h2 className='font-extrabold drop-shadow-2xl text-2xl'>Nos encontramos acá!</h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.3624850713045!2d-56.12927835549746!3d-34.84711816456376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80a795d5f455%3A0xd51a6432a00e188e!2sOficial%205%205371%2C%2012200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1690734791107!5m2!1ses-419!2suy'
                width='300' height='260' className='rounded-md' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'
              />
            </article>
          </section>
          <footer className='p-4 flex justify-between text-sm opacity-70'>
            <span> Desarrollado para el proyecto de egreso UniFormas</span>
            <span> © Agustin Padilla 2023 </span>
          </footer>
        </footer>
      </main>
    </div>
  )
}

export default App
