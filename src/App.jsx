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
    <div className='min-h-screen m-0'>
      <Header productsList={productList} />
      <main className='snap-y snap-proximity overflow-auto h-screen pt-16'>
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
