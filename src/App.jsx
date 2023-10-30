import { Header } from './components/Header'
import { LogoSection } from './components/LogoSection'
import { ProductPresentationSection } from './components/ProductPresentationSection'
import { EcoFriendlySection } from './components/EcoFriendlySection'
import { ProductsListSection } from './components/ProductsListSection'
import { Footer } from './components/Footer'
import { useContext, useRef } from 'react'
import { ContactDialog } from './components/ContactDialog'
import { ContactContext } from './context/contact'
function App () {
  const productList = useRef(null)
  const { contactOpen } = useContext(ContactContext)
  return (
    <div className='min-h-screen m-0 scroll-smooth'>
      <Header productsList={productList} />
      <main className='md:snap-y md:snap-mandatory overflow-auto md:pt-16 h-screen'>

        {contactOpen &&

          <ContactDialog />}

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
