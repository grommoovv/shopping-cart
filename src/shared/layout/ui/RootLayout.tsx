import { Outlet } from 'react-router'
import { Header } from '../../../widgets/header'
import { Footer } from '../../../widgets/footer'

export const RootLayout = () => {
  return (
    <>
      <div className='__layout'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
