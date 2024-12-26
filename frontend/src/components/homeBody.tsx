import HomeBodySignUp from "./homeBodySignUp.tsx";
import HomeBodySearchBar from "./homeBodySearchBox.tsx";
import HomeBodyCard from "./homeBodyCard.tsx";
const HomeBody: React.FC = () => { 
    return (
          <div id = "body" className = "bg-pink-400 w-full h-[700px] mt-[30px]">
             <div className = "flex justify-center items-center p-10">
                <div className = "flex flex-col">
                    <h1 className = "flex justify-center font-bold text-5xl">
                        Prescription Service & Pharmacy.
                    </h1>
                    <br></br>
                    <h2 className = "flex justify-center font-light text-3xl ">
                        Free NHS Prescription Delivery
                    </h2>
                    <div className = " mt-[30px] flex justify-center items-center">
                        <HomeBodySignUp/>
                    </div>
                    <div className = " mt-[30px] flex justify-center items-center">
                        <HomeBodySearchBar/>
                    </div>
                    <div className = "mt-[30px] flex flex-row space-x-8">
                        <HomeBodyCard/>
                        <HomeBodyCard/>
                        <HomeBodyCard/>
                    </div>
                </div>
             </div>
          </div>
    );
};

export default HomeBody;
