import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/projects'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav /><Home /><Footer/></>
    },
    {
      path: "/Projects",
      element: <><Nav /><Projects /><Footer/></>
    },
    {
      path: "/About_me",
      element: <><Nav /><About /><Footer/></>
    },
    {
      path: "/Contact_me",
      element: <><Nav /><Contact /><Footer/></>
    },
    {
      path: "/My_Resume",
      element: <><Nav /><Resume /><Footer/></>
    },
  ])


  return (
    <>
      <div className="bg-neutral-900">
        <p className='flex justify-center bg-black text-white font-semibold text-[17px]'>This is Portfolio Website !!</p>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
