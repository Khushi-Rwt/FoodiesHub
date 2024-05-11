import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./component/Header";
import Body from "./component/Body";

/*
Header
-Logo
-Nav Icon

Body
-Search
-RestaurantContainer
-RestauratCard
--img
--Name of the restaurent, star rating, cuisines, delivery time 

Footer
-Copyright
-Links
-Address
-Contact

Footer
*/   


const Footer = () => {
  return(
    <div className="footer">
      <h3>Copyright @Khushi</h3>
    </div>
  )
} 

const AppLayout = () =>{
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Body */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 