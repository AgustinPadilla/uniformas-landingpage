import { ColoredSection } from './components/ColoredSection'
import { NavItem } from './components/NavItem'
import { Title } from './components/Title'
import { Logo } from './components/logo'

function App () {
  return (
    <div className='min-h-screen m-0'>
      <header className='text-xl z-10 fixed top-0 w-full bg-white h-16'>
        <nav className='flex justify-center items-center h-full'>
          <NavItem>Compra ya!</NavItem>
          <NavItem>Sobre nosotros</NavItem>
          <Logo w={70} h={40} />
          <NavItem>Contactanos</NavItem>
          <NavItem>Dona tu ropa</NavItem>
        </nav>
      </header>
      <main className='snap-y snap-proximity overflow-auto h-screen pt-16'>
        <ColoredSection color='sky'>
          <article className='flex flex-col justify-between max-w-xl'>
            <Title>Uniformes de calidad !</Title>
            <h2 className='text-2xl font-extrabold text-sky-950 drop-shadow-lg mb-4'>Para escuelas, colegios y liceos</h2>
            <div className='text-lg font-medium drop-shadow-lg flex flex-col items-center max-w-xl gap-5'>
              <p>Ofrecemos productos con la mejor calidad y durabilidad posibles, en variedad de estilos para niños y niñas!</p>
              <ul className='ml-10'>
                <li className='mb-5 flex items-center'> <img src='nursery.svg' className='h-8 mr-4' />Jardineros personalizados</li>
                <li className='mb-5 flex items-center'><img src='school.svg' className='h-8 mr-4' />Tunicas escolares</li>
                <li className='mb-5 flex items-center'><img src='college.svg' className='h-8 mr-4' />Conjuntos de colegios y liceo</li>
              </ul>
              <button className='bg-sky-700 text-white py-2 px-7 shadow-xl hover:bg-sky-600 active:translate-y-1 active:bg-sky-800'>Comprar</button>
            </div>
          </article>
          <picture className='w-96'>
            <div className='flex flex-grow'>
              <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-40 m-0 -rotate-12' />
            </div>
            <div className='flex flex-grow justify-end'>
              <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-40 rotate-12' />
            </div>
            <div className='flex flex-grow'>
              <img src='mona.png' alt='moña' className='drop-shadow-2xl h-fit w-40 -rotate-12' />
            </div>
          </picture>
        </ColoredSection>
        <ColoredSection color='green'>
          <article className='flex flex-col justify-between max-w-xl'>
            <Title>Lo mejor para vos y para el planeta!</Title>
          </article>
          <picture className='w-96 flex flex-col justify-center items-center'>
            <img src='Eco.svg' />
          </picture>
        </ColoredSection>
      </main>
    </div>
  )
}

export default App
