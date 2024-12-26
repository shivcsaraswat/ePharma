import assetConfig from "../assets/asset.config.ts";

const CartIcon:React.FC = () => { 
    console.log(assetConfig.cartIcon);
     return (
         <img src = {assetConfig.cartIcon} className = "h-6 w-6" alt = "cart-icon"/>
    );
};

export default CartIcon;