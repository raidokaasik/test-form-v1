import { AppLayout } from './layout/AppLayout'
import { NavMenu } from './components/NavMenu'
import { Hiring } from './pages/Hiring'
import '@fontsource-variable/mulish'

export const App = () => {
  return (
    <AppLayout>
      <NavMenu />
      <Hiring />
    </AppLayout>
  )
}
