import assetConfig from "../assets/asset.config";

const TrustPilotIcon: React.FC = () => { 
    return (
        <div > 
           <img src = {assetConfig.trustPilotIcon} alt = "trustPilotIcon" className = "w-4 h-4">
           </img> 
        </div>
    );
};

export default TrustPilotIcon;