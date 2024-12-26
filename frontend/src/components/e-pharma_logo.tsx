import assetConfig from "../assets/asset.config.ts";
import React from 'react';
const EPharmaLogo: React.FC = () => {
return (
    <div className = "h-16  " >
        <img src = {assetConfig.ePharmacyLogo}  alt = "epharma-logo" />
    </div>
    );
};

export default EPharmaLogo;


