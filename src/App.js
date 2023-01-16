//components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Techs from './components/Techs';
import Ui from './components/Ui';
import Erd from './components/Erd';
import Blogs from './components/Blogs';
import Mavericks from './components/mavericks/Mavericks';
import Footer from './components/Footer';

function App() {

  return (
    <div className='bg-dark'>
      <Navbar />
      <div className='xl:mx-32 lg:mx-24 md:mx-16 sm:mx-11 mx-9'>
      <Hero />
      <Info />
      <Techs />
      <Ui />
      <Erd />
      <Blogs />
      <Mavericks />
      <Footer />
      </div>
    </div>
  );
}

export default App;