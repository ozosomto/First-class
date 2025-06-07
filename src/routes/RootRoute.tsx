import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import TopHeader from "../Components/Header/TopHeader";
import Services from "../page/Services";
import Fleet from "../page/Fleet";
import Footer from "../Components/Footer";

const RootRoute: React.FC = () => {
  return <div>
    {/* header */}

<div className=" flex flex-col ">
    <TopHeader />
    <Header />
    
    <Outlet  />

    
    <Services />
    <Fleet />

    {/* footer */}

    <Footer />
</div>
  </div>
};

export default RootRoute;
