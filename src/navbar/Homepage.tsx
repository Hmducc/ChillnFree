import home from "../assets/homepage.jpg";
import "./Homepage.css";
import Item from "./Item";

import { items } from "./items";

const Homepage: React.FC = () => {
  const displayedItems = items.slice(0, 4);
  const displayedItems2 = items.slice(5, 9);
  return (
    <div className="homepage">
      <div>
        <img src={home}></img>
      </div>
      <div className="new ">
        <div className="newitem ">
          <h1 className="barlow2 text1 text-main  ">SẢN PHẨM MỚI</h1>
        </div>
        <div className="productline">
          <div className="product">
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
      <div className="image1"></div>
      <div className="new ">
        <div className="newitem ">
          <h1 className="barlow2 text1 text-main  ">SẢN PHẨM BÁN CHẠY</h1>
        </div>
        <div className="productline">
          <div className="product">
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
