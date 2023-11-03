import { Header } from './components/Header'
import { LogoSection } from './components/LogoSection'
import { ProductPresentationSection } from './components/ProductPresentationSection'
import { EcoFriendlySection } from './components/EcoFriendlySection'
import { ProductsListSection } from './components/ProductsListSection'
import { Footer } from './components/Footer'
import { ContactDialog } from './components/ContactDialog'
import { ProductDialog } from './components/ProductDialog'
import { useContact } from './hooks/useContact'
import { useProduct } from './hooks/useProduct'
import { useAboutUs } from './hooks/useAboutUs'
import { AboutUsDialog } from './components/AboutUsDialog'

function App () {
  const { contactOpen } = useContact()
  const { productOpen } = useProduct()
  const { aboutUsOpen } = useAboutUs()
  return (
    <div className='min-h-screen m-0 scroll-smooth'>
      <Header />
      <main className='lg:snap-y lg:snap-mandatory overflow-auto md:pt-16 h-screen'>

        {contactOpen && <ContactDialog />}
        {productOpen.open && <ProductDialog />}
        {aboutUsOpen && <AboutUsDialog />}

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
