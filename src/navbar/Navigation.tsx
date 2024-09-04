import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bag from "../assets/bag.png";
import logo from "../assets/chillnfree.png";
import phone from "../assets/phone.png";
import place from "../assets/place.png";
import user from "../assets/user.png";
import "./Navigation.css";
const navigation = [
  { name: "TRANG CHỦ", href: "/home" },
  { name: "NEW ARRIVAL", href: "/arrival" },
];
const navigation2 = [
  { name: "SẢN PHẨM", href: "/product" },
  { name: "LIÊN HỆ", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="">
      <header className="inset-x-0 top-0 z-50 ">
        <nav
          aria-label="Global"
          className="flex  justify-between bg-white nav-container lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/home" className=" lg:hidden">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="  nav-small-logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button // PHẦN NÚT BẤM MENU BÊN PHẢI
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div
            className="hidden lg:flex lg:gap-x-20 items-center" /* PHẦN CHÍNH GIỮA */
          >
            <div className="hidden lg:flex lg:gap-x-20 nav-middle mt-10 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" justify-content barlow1 nav-middle-text text-gray-900 nav-tab "
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a href="/home" className="-m-1.5 p-1.5  ">
              <img alt="" src={logo} className="nav-logo" />
            </a>
            <div className="hidden lg:flex lg:gap-x-20 mt-10 ">
              {navigation2.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="leading-6  barlow1 nav-middle-text text-gray-900 nav-tab"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="  hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="leftside ">
              <img src={place} className="place"></img>
              <h1 className="barlow1 vietnam">VIETNAM</h1>
              <img src={phone} className="phone"></img>
              <h1 className="barlow1 number">032 666 1994</h1>
            </div>
            <div className="rightside ">
              <img src={user} className="user"></img>
              <button className="barlow1 taikhoan" onClick={handleLogin}>
                TÀI KHOẢN
              </button>
              <img src={bag} className="cart"></img>
              <button className="barlow1 giohang" onClick={handleCart}>
                GIỎ HÀNG
              </button>
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className=" flow-root mt-20">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 barlow2  leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                  {navigation2.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 barlow2  leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 barlow2 leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    TÀI KHOẢN
                  </a>
                  <a
                    href="/cart"
                    className="-mx-3 block rounded-lg px-3 py-2.5 barlow2  leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    GIỎ HÀNG
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
