

import Banner from './Banner/Banner';

import Pricing from './Pricing/Pricing';
import Services from './Services/Services';
// import Whatwedo from './Map';
import Categories from './Categories/Categories';


const Home = () => {

  return (
    <>
      <Banner />
      <Categories></Categories>
      <Services  />
      <Pricing />
      {/* <Whatwedo></Whatwedo> */}
     
    </>
  );
};

export default Home;
