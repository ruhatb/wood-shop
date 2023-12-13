
import { Header, Navbar  } from "../components";

import { Outlet } from "react-router-dom";

const Homepage = () => {
    return (
        <>
        <Header />
        <Navbar />
        <section className="align-element py-20">
        <Outlet />
        </section>
       
          
        </>
         ) 
        };

        export default Homepage;
        