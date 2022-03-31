import {Badge} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { green } from '@material-ui/core/colors';
import { brown } from '@material-ui/core/colors';

const CartWidget = () => {
    return (
        <Badge badgeContent={3} style= {{ color: green[800] }}>
            <ShoppingCartOutlinedIcon style= {{ color: brown[900] }} />
        </Badge>
    )
}

export default CartWidget;