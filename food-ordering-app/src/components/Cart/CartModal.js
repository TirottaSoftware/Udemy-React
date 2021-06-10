import './Cart.css';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

const Backdrop = () => {
    return <div className = "backdrop">

    </div>
}

const ModalOverlay = props => {
    return <div className = "cart-modal">
        {props.children}
    </div>
}

const CartModal = (props) => {
    const overlayElement = document.getElementById("overlays");

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, overlayElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayElement)}

        </Fragment>
    )
}

export default CartModal;