import { createBrowserRouter, RouterProvider  } from "react-router-dom";

import Home from "./routes/home/home.component.js";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authintication/authentication.component.jsx";
import CategoriesPreview from "./routes/categories-preview/categories-preview.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import Category from "./routes/category/category.component.jsx";

let routes = createBrowserRouter([
  {path:'/' , element:<Navigation /> , children:[
    {index:true , element:<Home />},
    {path:"home" , element:<Home />},
    {path:'auth' , element:<Authentication />},
    {path : 'shop' , element:<CategoriesPreview />},
    {path : 'shop/:title' , element:<Category />},
    {path : 'checkout' , element:<Checkout />}

  ]}
])

const App = () => {
  
   
  return (
    <RouterProvider router={routes}> </RouterProvider>
  );
};

export default App;
