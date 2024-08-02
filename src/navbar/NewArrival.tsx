import "./NewArrival.css";
import Item from "./Item";

import { Select, Space, Pagination } from "antd";
import { items } from "./items";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const displayedItems = items.slice(10, 19);

function NewArrival() {
  return (
    <div className="product-page ">
      <div className="window">
        <div className="window-container">
          <div className="window1">1</div>
          <div className="window2">3</div>
          <div className="window3">3</div>
        </div>
      </div>
      <div className="product-new ">
        <div className="product-newitem ">
          <h1 className="barlow2 product-text1 text-main  ">NEW ARRIVAL</h1>
        </div>
        <div className=" product-pick">
          <div className="product-select-container">
            <Space wrap className="product-select  barlow3">
              <Select
                defaultValue="Lọc giá"
                className="barlow3 product-choice"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Lọc giá", label: "Lọc giá", disabled: true },
                  { value: "300000", label: "300.000 VND" },
                  { value: "400000", label: "400.000" },
                  { value: "500000", label: "500.000" },
                  { value: "1000000", label: "1.000.000" },
                ]}
              />
              <Select
                defaultValue="Giới tính"
                className="barlow3 product-choice"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Giới tính", label: "Giới tính", disabled: true },
                  { value: "Nam", label: "Nam" },
                  { value: "Nữ", label: "Nữ" },
                ]}
              />
              <Select
                defaultValue="Kích thước"
                className="barlow3 product-choice"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Kích thước", label: "Kích thước", disabled: true },
                  { value: "S", label: "S" },
                  { value: "M", label: "M" },
                  { value: "L", label: "L" },
                  { value: "XL", label: "XL" },
                  { value: "2XL", label: "2XL" },
                ]}
              />
              <Select
                defaultValue="Màu sắc"
                className="barlow3 product-choice"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Màu sắc", label: "Màu sắc", disabled: true },
                  { value: "Đỏ", label: "Đỏ" },
                  { value: "Xanh", label: "Xanh" },
                  { value: "Vàng", label: "Vàng" },
                ]}
              />
              <Select
                defaultValue="Loại"
                className="barlow3 product-choice"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Loại", label: "Loại", disabled: true },
                  { value: "Quần", label: "Quần" },
                  { value: "Áo", label: "Áo" },
                ]}
              />
            </Space>
            <div className="product-arrange-container">
              <Select
                defaultValue="Sắp xếp theo"
                className="barlow3 product-arrange"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  {
                    value: "Sắp xếp theo",
                    label: "Sắp xếp theo",
                    disabled: true,
                  },
                  { value: "Giá tăng dần", label: "Giá tăng dần" },
                  { value: "Giá giảm dần", label: "Giá giảm dần" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="product-line ">
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
        <Pagination
          align="center"
          defaultCurrent={1}
          total={50}
          className="page"
        />
      </div>
    </div>
  );
}

export default NewArrival;
