import home from "../assets/homepage.jpg";
import "./Homepage.css";
import Item from "./Item";
import gam from "../assets/gam.png";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div>
        <img src={home}></img>
      </div>
      <div className="new">
        <div className="newitem ">
          <h1 className="barlow2 text1 text-main  ">SẢN PHẨM MỚI</h1>
        </div>
        <div className="productline">
          <div className="product" style={{ display: "flex", gap: "0px" }}>
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            {/* Add more ItemCard components here */}
          </div>
        </div>
      </div>
      <div className="image1"></div>
      <div className="new ">
        <div className="newitem ">
          <h1 className="barlow2 text1 text-main  ">SẢN PHẨM BÁN CHẠY</h1>
        </div>
        <div className="productline">
          <div className="product" style={{ display: "flex", gap: "0px" }}>
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            <Item
              image={gam}
              name="FOOTBALL JERSEY MIXER x G..."
              price="550.000 VND"
            />
            {/* Add more ItemCard components here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
