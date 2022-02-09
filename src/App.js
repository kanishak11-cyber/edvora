import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';




function App() {
  const [productListData, setProductListData] = useState([]);
useEffect(() => {
  const products = async () => {
    const response = await fetch('https://api.myjson.com/bins/1hj7w5');
    const data = await response.json();
    setProductListData(data.products);
  };
  products();
}, []);

  return (
    <div className="bg-[#292929] h-full text-white">
      {/* <ProductList /> */}
      <Main/>
     
    </div>
  );
}

export default App;
