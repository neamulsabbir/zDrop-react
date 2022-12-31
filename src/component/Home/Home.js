import "./Home.css";
import useBanner from "../Hooks/useBanner";
import Banner from "../Banner/Banner";
import useProducts from "../Hooks/useProducts";

import Items from "../Items/Items";


const Home = () => {
  const [banners] = useBanner();
  const [products] = useProducts();

  return (
    <div className="home">
      <div className="home-container">
        {
            banners.map((banner) => (
                <Banner key={banner.id} banner={banner}></Banner>))
        }
      </div>

      <div>
        {
            products?.map(product => (
                <Items product={product}></Items>))
        }
      </div>
    </div>
  );
};

export default Home;
