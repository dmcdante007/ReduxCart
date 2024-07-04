import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const check = useSelector(state => state.ui.cartIsVisible)

  const toggleCartHandler = ()=> {
    console.log('button clicked')
    dispatch(uiActions.toggle());
    console.log(check)
  }

  return (
    <button onClick={toggleCartHandler}  className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
