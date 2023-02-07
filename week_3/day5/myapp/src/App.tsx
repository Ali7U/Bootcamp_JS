import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import data from "./data";
import { useState } from "react";
import Cards from "./components/Cards";
import Baskit from "./components/Baskit";
// import {arrProducts} from './components/Cards'

interface arrProducts {
  id: number;
  title: string;
  price: number;
  img: string;
  qty?: any;
}


const products: arrProducts[]  =[
  {
    id: 1,
    title: "Juventus shirt 2022/23 Home ",
    price: 150,
    img: "https://i.pinimg.com/236x/25/1e/42/251e42a25d6b47fad88f5ef0f3a097e0.jpg",
  },
  {
    id: 2,
    title: "Juventus shirt 2022/23 away ",
    price: 150,
    img: "https://i.pinimg.com/736x/6c/e4/5c/6ce45c685b11b0140979a0fcaf35bd47.jpg",
  },
  {
    id: 3,
    title: "Juventus shirt classic ",
    price: 350,
    img: "https://i.pinimg.com/236x/fb/c4/55/fbc455da2ecc1466fc0787d42c146e44.jpg",
  },
  {
    id: 4,
    title: "Juventus backpack ",
    price: 20,
    img: "https://i.pinimg.com/236x/e0/b3/01/e0b301631fff45a37abd472b1c806660.jpg",
  },
  {
    id: 5,
    title: "Juventus lunch bag ",
    price: 25,
    img: "https://i.pinimg.com/236x/e0/b3/01/e0b301631fff45a37abd472b1c806660.jpg",
  },
  {
    id: 6,
    title: "Juventus backpack lunch bag ",
    price: 50,
    img: "https://i.pinimg.com/236x/07/0d/2b/070d2b6920c8cc047b6e2526cb1df7f7.jpg",
  },
  {
    id: 7,
    title: "Juventus short ",
    price: 50,
    img: "https://i.pinimg.com/236x/81/e5/eb/81e5eb7acfdf9419b7430a9919e49992.jpg",
  },
  {
    id: 8,
    title: "Juventus white short ",
    price: 50,
    img: "https://i.pinimg.com/236x/0a/66/22/0a66229db93ea0116f587d5d1723e26e.jpg",
  },
  {
    id: 9,
    title: "Juventus white cap ",
    price: 25,
    img: "https://i.pinimg.com/236x/59/4a/56/594a566b870c8dd9f3326110c9e9b1bd.jpg",
  },
  {
    id: 10,
    title: "Juventus cap ",
    price: 10,
    img: "https://i.pinimg.com/236x/e4/b2/35/e4b235d14919c4d2042a47ec4dd09f9b.jpg",
  },
  {
    id: 11,
    title: "Juventus nice cap ",
    price: 20,
    img: "https://i.pinimg.com/236x/52/8d/23/528d238ad5448569ea9ef3145a003c29.jpg",
  },
  {
    id: 12,
    title: "Juventus ball",
    price: 20,
    img: "https://i.pinimg.com/736x/14/56/11/145611e4a8ef1a9e5d30a0e8329d9d4d.jpg",
  },
  {
    id: 13,
    title: "Juventus ball",
    price: 20,
    img: "https://i.pinimg.com/236x/a7/a7/20/a7a72055ef5fcd179a7c7423716ee85c.jpg",
  },
  {
    id: 14,
    title: "Juventus ball",
    price: 20,
    img: "https://i.pinimg.com/236x/0e/61/5c/0e615c6342119c79aab05d594955f8a1.jpg",
  },
];

function App() {
  // const { products } = data;
  const [cartItems, setCartItems] = useState<any>([]);

  const onAdd = (product: any) => {
    const exist = cartItems.find((x:any) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x:any) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/AllProducts"
          element={<Cards onAdd={onAdd} products={products} />}
        />
        {/* <Route
          path="/cart"
          element={<Baskit onAdd={onAdd} cartItems={cartItems} />}
        /> */}
        <Route
          path="/shirts"
          element={<Cards onAdd={onAdd} products={products.slice(0, 3)} />}
        />
        <Route
          path="/bags"
          element={<Cards onAdd={onAdd} products={products.slice(3, 6)} />}
        />
        <Route
          path="/shorts"
          element={<Cards onAdd={onAdd} products={products.slice(6, 8)} />}
        />
        <Route
          path="/caps"
          element={<Cards onAdd={onAdd} products={products.slice(8, 11)} />}
        />
        <Route
          path="/balls"
          element={<Cards onAdd={onAdd} products={products.slice(11, 14)} />}
        />
      </Routes>
      {/* <Baskit cartItems={cartItems} /> */}
      <Footer />
    </div>
  );
}

export default App;
