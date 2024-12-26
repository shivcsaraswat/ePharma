import React from "react";
import NavBar from "../components/navigationBar.tsx";
import Header from "../components/header.tsx"
import HomeBody from "src/components/homeBody.tsx";
type Props = {};

const Home: React.FC<Props> = () => {
    return (
        <div id = 'navbar' className = "h-12  w-full md:h-16 lg:h-20 bg-white text-white " > 
            <Header/>
            <NavBar/>
            <HomeBody/>
        </div>
    );
};



export default Home;

    

