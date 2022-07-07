import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import InstructorDetail from './pages/InstuctorDetail';
import Paths from './pages/Paths';
import Aws from "./pages/Aws";
import FullStack from "./pages/FullStack";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:id" element={<InstructorDetail />} />
        
        <Route path="/paths" element={<Paths />}> {/* Nested-Route */}
          <Route index element={<FullStack />} />
          <Route path="fullstack" element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
        
        <Route path="/contact" element={<PrivateRouter />} >
          <Route path="" element={<Contact />} />  {/*  path="" yerine index yazınca da çalışır */}
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
