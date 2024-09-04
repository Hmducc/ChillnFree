import home from "../assets/homepage.jpg";
import store1 from "../assets/store1.png";
import "./Homepage.css";
import Item from "./Item";

import { items } from "./items";

const Homepage: React.FC = () => {
  const displayedItems = items.slice(0, 4);
  const displayedItems2 = items.slice(5, 9);
  return (
    <div className="homepage ">
      <div>
        <img
          src={home}
          className="md:w-full md:h-96 md:object-cover lg:w-full lg:h-700  "
        ></img>
      </div>
      <div className="new  lg:w-full lg:h-500 md:h-72  ">
        <div className=" ml-6 w-36 relative md:w-44  top-5 lg:w-52 lg:mt-5 lg:h-10 lg:ml-14    ">
          <h1 className="barlow2 text-2xl  lg:text-4xl  text-main  ">
            SẢN PHẨM MỚI
          </h1>
        </div>
        <div className="productline lg:mt-20 md:mt-12 ipad-pro:mt-5  ">
          <div className="grid grid-cols-2 justify-center gap-5 lg:gap-20    items-center md:grid-cols-4 product">
            {displayedItems.map((item) => (
              <Item
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="image  ">
        <img src={store1} className="image1 h-40 lg:h-75 "></img>
      </div>
      <div className="new lg:w-full lg:h-500 md:h-72">
        <div className="ml-6 w-52 relative md:w-64  top-5 lg:w-75 lg:mt-5 lg:h-10 lg:ml-14 ">
          <h1 className="barlow2 text-2xl  lg:text-4xl text-main  ">
            SẢN PHẨM BÁN CHẠY
          </h1>
        </div>
        <div className="productline lg:mt-20 ipad-pro:mt-5 md:mt-12">
          <div className="grid grid-cols-2 justify-center gap-5 lg:gap-20     items-center md:grid-cols-4 product">
            {displayedItems2.map((item) => (
              <Item
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
