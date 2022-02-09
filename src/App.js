import "./App.css";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-[#292929] overflow-hidden text-white">
      {/* <Main /> */}

      <div className="flex flex-row ">
        <div className="m-6">
          <Filter />
        </div>
        <div className="m-5">
          <div className="opacity-90">
            <h1 className="font-bold md:text-4xl ">Edvora</h1>
          </div>
          <div className="md:mt-5">
            <h1 className="opacity-50 md:text-2xl font-medium">Products</h1>
          </div>
          <div>
            <div className="border-b">
              <h1 className="mt-5 font-normal md:text-xl text-sm pb-4">
                Product Name{" "}
              </h1>
            </div>

            <div className="md:mt-5 scroll-smooth">
       
                <ProductList />
          
            </div>
            <div className="border-b">
              <h1 className="mt-5 font-normal md:text-xl text-sm ">
                Product Name{" "}
              </h1>
            </div>
            <div className="md:mt-5 scroll-smooth">
             
                <ProductList />
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
