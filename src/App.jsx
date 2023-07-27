import logoUF from './assets/logoUF.svg'
import nursery from './assets/nursery.svg'
import school from './assets/school.svg'
import college from './assets/college.svg'
function App () {
  return (
    <div className='min-h-screen m-0'>
      <header className='text-xl'>
        <nav className='flex justify-center items-center'>
          <button className='hover:text-blue-400 transition-all max-h-14 p-3 font-medium'>Compra ya!</button>
          <button className='hover:text-blue-400 transition-all max-h-14 p-3 font-medium'>Sobre nosotros</button>
          <img src={logoUF} alt='UniFormas Logo' className='h-20 mx-3' />
          <button className='hover:text-blue-400 transition-all max-h-14 p-3 font-medium'>Contactanos</button>
          <button className='hover:text-blue-400 transition-all max-h-14 p-3 font-medium'>Dona tu ropa</button>
        </nav>
      </header>
      <main>
        <section className='min-w-full p-12 bg-sky-300 flex justify-center gap-10'>
          <article className='flex flex-col justify-between'>
            <h1 className='text-5xl text-white font-extrabold drop-shadow-lg mb-6'>Uniformes de calidad !</h1>
            <h2 className='text-2xl font-extrabold text-sky-950 drop-shadow-lg mb-4'>Para escuelas, colegios y liceos</h2>
            <div className='text-lg font-medium drop-shadow-lg flex flex-col items-center max-w-xl gap-5'>
              <p>Ofrecemos productos con la mejor calidad y durabilidad posibles, en variedad de estilos para niños y niñas!</p>
              <ul className='ml-10'>
                <li className='mb-5 flex items-center'> <img src={nursery} className='h-8 mr-4' />Jardineros personalizados</li>
                <li className='mb-5 flex items-center'><img src={school} className='h-8 mr-4' />Tunicas escolares</li>
                <li className='mb-5 flex items-center'><img src={college} className='h-8 mr-4' />Conjuntos de colegios y liceo</li>
              </ul>
              <button className='bg-sky-700 text-white py-2 px-7 shadow-xl hover:bg-sky-600 active:translate-y-1 active:bg-sky-800'>Comprar</button>
            </div>
          </article>
          <img src='../img/mona.png' alt='moña' className='drop-shadow-2xl ' />
        </section>
      </main>
    </div>
  )
}

export default App
