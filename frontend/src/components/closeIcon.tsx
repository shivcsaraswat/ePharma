import assetConfig from "../assets/asset.config";

const CloseIcon: React.FC = () => {
 
    return (
        <div className = "p-2 flex justify-center items-center rounded-lg w-10 h-10 bg-white border border-gray-300">
            <img src = {assetConfig.closeIcon} alt = "close-icon" className = "h-2 w-2" >
            </img>
        </div>
        
    );

};


export default CloseIcon;
