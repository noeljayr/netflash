import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components/layouts'
import { Home, Error, ProjectShow, Contact } from './components/pages'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route>
          <Route
            path='/project/:id'
            element={<ProjectShow />}
          />
        </Route>
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/*'
          element={<Error />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
