import { Header } from './components/Header'
import { LogoSection } from './components/LogoSection'
import { ProductPresentationSection } from './components/ProductPresentationSection'
import { EcoFriendlySection } from './components/EcoFriendlySection'
import { ProductsListSection } from './components/ProductsListSection'
import { Footer } from './components/Footer'
import { useContext, useRef } from 'react'
import { ContactDialog } from './components/ContactDialog'
import { ContactContext } from './context/contact'
import { ProductContext } from './context/product'
import { ProductDialog } from './components/ProductDialog'
function App () {
  const productList = useRef(null)
  const { contactOpen } = useContext(ContactContext)
  const { productOpen } = useContext(ProductContext)
  return (
    <div className='min-h-screen m-0 scroll-smooth'>
      <Header productsList={productList} />
      <main className='lg:snap-y lg:snap-mandatory overflow-auto md:pt-16 h-screen'>

        {contactOpen && <ContactDialog />}
        {productOpen.open && <ProductDialog />}

        <LogoSection />

        <ProductPresentationSection />

        <EcoFriendlySection />

        <ProductsListSection />

        <Footer />
      </main>
    </div>
  )
}

export default App
