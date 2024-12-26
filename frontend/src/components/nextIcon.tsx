import assetConfig from "../assets/asset.config.ts";



const NextIcon:React.FC = () => {
    return (

        <div id = "next-icon" className = "p-1.5 border border-gray-300 bg-white w-8 h-8 rounded-lg items-center justify-center">
          <img src = {assetConfig.nextIcon} alt = "next-icon">
          </img>
        </div>
    ); 

};


export default NextIcon;
