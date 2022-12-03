import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center px-12 p-4 text-sm font-bold">
      <div>
        <a href="https://tesla.com">
          <img
            className="h-3"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla logo"
          />
        </a>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/model3">Model 3</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/solarpanels">Solar Panels</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://shop.tesla.com">Shop</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5 class">
            <a href="https://tesla.com/teslaaccount">Account</a>
          </li>
          <li
            onClick={handleToggle}
            className="py-1 px-3 hover:rounded hover:bg-black/5 class"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleToggle}
          className="inline-flex items-center bg-black/5 p-1 px-5 rounded-md text-sm font-medium shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>
      <div
        className={
          nav
            ? "flex flex-col top-0 overflow-scroll overflow-x-hidden bg-[#ffff] absolute right-0 w-full h-full z-10 cursor-pointer lg:w-[50%]"
            : "fixed right-[100%] "
        }
      >
        <div className="flex top-0 justify-end py-2 px-2  bg-white">
          <TfiClose
            onClick={handleToggle}
            className="rounded p-1 hover:bg-black/5"
            size={24}
          />
        </div>
        <ul>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Model 3</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Model X</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Model S</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Model Y</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Solar Roof</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Solar Panels</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">
            Existing Inventory
          </li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">
            Used Inventory
          </li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Trade-in</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Test Drive</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Insurance</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Powerwall</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">
            Commercial Energy
          </li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Utilities</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Charging</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Find Us</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Support</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">
            Investor Relations
          </li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Shop</li>
          <li className="m-4 px-2 rounded-sm hover:bg-black/5">Account</li>
        </ul>
        <ul>
          <li className="m-4 px-2 hover:bg-black/5 rounded-sm">More</li>
          <li className="m-4 px-2 hover:bg-black/5 rounded-sm"></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
