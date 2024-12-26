import assetConfig from "../assets/asset.config.ts";
import TrustPilotIcon from "./trustPilotIcon.tsx";

const Header: React.FC = () => {
  // Generate the TrustPilotIcon components using a for loop
  const trustPilotIcons = [];
  for (let i = 0; i < 5; i++) {
    trustPilotIcons.push(<TrustPilotIcon key={i} />);
  }

  return (
    <div id="header" className="flex w-full h-[27px] bg-pink-400 justify-center items-center">
      {/* Logo or Image */}
      <div>
        <img src={assetConfig.landingTrustImg} alt="Landing Trust Icon" />
      </div>

      {/* Trustpilot Icons */}
      <div id="trustpilot-icon" className="flex flex-row ml-4 space-x-0.5">
        {trustPilotIcons}
      </div>
     
      <div id = "rated-text" className = "ml-[10px]">
            <p>
                Rated 
                <span className = "text-teal-600 ml-[4px] font-bold">
                              4.8
                </span>
            </p>

      </div>
    </div>
  );
};

export default Header;
