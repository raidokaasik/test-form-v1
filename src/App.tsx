import { AppLayout } from './layout/AppLayout'
import { NavMenu } from './components/NavMenu'
import { Hiring } from './pages/Hiring'

export const App = () => {
  return (
    <AppLayout>
      <NavMenu />
      <Hiring />
    </AppLayout>
  )
}
