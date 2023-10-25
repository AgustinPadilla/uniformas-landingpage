import { Header } from './components/Header'
import { LogoSection } from './components/LogoSection'
import { ProductPresentationSection } from './components/ProductPresentationSection'
import { EcoFriendlySection } from './components/EcoFriendlySection'
import { ProductsListSection } from './components/ProductsListSection'
import { Footer } from './components/Footer'
import { useRef } from 'react'
function App () {
  const productList = useRef(null)

  return (
    <div className='min-h-screen m-0 scroll-smooth'>
      <Header productsList={productList} />
      <main className='snap-y snap-mandatory overflow-auto md:pt-16 h-screen'>
        <LogoSection />

        <ProductPresentationSection />

        <EcoFriendlySection />

        <ProductsListSection ref={productList} />

        <Footer />
      </main>
    </div>
  )
}

export default App
