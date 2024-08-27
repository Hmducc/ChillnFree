import Item from "./Item";
import "./Product.css";

import { Pagination, Select, Space } from "antd";
import { items } from "./items";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

function Product() {
  return (
    <div className="product-page  ">
      <div className="product-new md:h-1300 lg:h-2300 ">
        <div className="product-newitem  ">
          <h1 className="barlow2 product-text1 lg:text-4xl text-2xl lg:text-left lg:ml-14 text-main   ">
            TẤT CẢ SẢN PHẨM
          </h1>
        </div>

        <div className=" product-pick">
          <div className="product-select-container  flex flex-wrap justify-between gap-4">
            <Space
              wrap
              className="product-select  barlow3 w-full lg:w-[calc(50%-16px)]"
            >
              <Select
                defaultValue="Lọc giá"
                className="barlow3 justify-center product-choice"
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
              <Select
                defaultValue="Sắp xếp theo"
                className="barlow3 product-choice"
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
            </Space>
            <div className="product-arrange-container hidden lg:block  ">
              <Select
                defaultValue="Sắp xếp theo"
                className="barlow3 product-arrange bg-red-300 "
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
        <div className="productline lg:mt-20 md:mt-12 ipad-pro:mt-5  ">
          <div className="grid grid-cols-2 justify-center gap-5 lg:gap-20    items-center md:grid-cols-4 product">
            {items.map((item) => (
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
          className="page "
        />
      </div>
    </div>
  );
}

export default Product;
