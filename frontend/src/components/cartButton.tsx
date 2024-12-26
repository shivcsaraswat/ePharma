
import CartIcon from "./cartIcon.tsx";
import Button from '@mui/material/Button';

const CartButton: React.FC = () => {
    return (
        <Button startIcon= {<CartIcon/>}/>
    );
};

export default CartButton;