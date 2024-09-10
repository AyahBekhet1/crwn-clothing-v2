import { createBrowserRouter, RouterProvider  } from "react-router-dom";

import Home from "./routes/home/home.component.js";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";




let routes = createBrowserRouter([
  {path:'/' , element:<Navigation /> , children:[
    {index:true , element:<Home />},
    {path:"home" , element:<Home />},
    {path:'signIn' , element:<SignIn />}
 

  ]}
])

const App = () => {
  
   
  return (
    <RouterProvider router={routes}> </RouterProvider>
  );
};

export default App;
