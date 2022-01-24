import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { FocusScope } from '@react-aria/focus';

const Backdrop = ({ onClick }) => {
    return <div className="fixed top-0 left-0 w-screen h-screen z-10 opacity-80 bg-black" onClick={onClick} />;
};

const ModalOverlay = ({ children, className }) => {
    return (
        <FocusScope contain autoFocus>
            <div className="fixed w-11/12 mx-auto inset-x-0 inset-y-24 z-20 overflow-scroll">
                <section className={className}>{children}</section>
            </div>
        </FocusScope>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, hideFavourites, className }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={hideFavourites} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay className={className}>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

Backdrop.propTypes = {
    onClick: PropTypes.func,
};

ModalOverlay.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
};

Modal.propTypes = {
    children: PropTypes.node,
    hideFavourites: PropTypes.func,
    className: PropTypes.node,
};

export default Modal;
