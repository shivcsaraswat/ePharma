import pathConfigs from "../path.config.ts";
import ePharmaLogo from './e-pharmacy.png';
import cartIcon from "./cart.png";


type AssetConfig =  { 
    ePharmacyLogo : string;
    cartIcon      : string;
    closeIcon     : string;
    landingTrustImg : string;  /* the  Star & Trustpilot Image on the header of every page of the website */
    loginIcon    : string;
    nextIcon      : string;
    trustPilotIcon : string;
};



const assetConfig: AssetConfig = {
    ePharmacyLogo : ePharmaLogo,
    cartIcon      : cartIcon,
    closeIcon     : `${pathConfigs.ePharmacyImgs}close.svg`,
    landingTrustImg : `${pathConfigs.ePharmacyImgs}landing-trust.svg`,  /* the  Star & Trustpilot Image on the header of every page of the website */
    loginIcon    : `${pathConfigs.ePharmacyImgs}avatar.svg`,
    nextIcon     : `${pathConfigs.ePharmacyImgs}next.svg`,
    trustPilotIcon :`${pathConfigs.ePharmacyImgs}trustpilot_rec.svg`,
};


export default assetConfig;


