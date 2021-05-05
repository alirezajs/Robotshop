import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal } from '../redux/reducers/cartReducer';
import { removeFromCart } from  "../redux/actions/cardActions";
const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (name) => dispatch(removeFromCart(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
