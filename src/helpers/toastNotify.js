import React from 'react';
import { close } from '../assets/Icons';
import toast from 'react-hot-toast';

export const toastNotify = () => {
    toast.custom(
        t => (
            <div
                className={`flex justify-between w-72 bg-purpledark border-white p-4 transform-gpu rounded-2xl border-2 shadow-sm relative transition duration-700 ease-in-out
              ${t.visible ? 'top-0' : '-top-96'} `}
            >
                <div className="font-base text-white">
                    <p>Link copied to clipboard!</p>
                </div>
                <div
                    className="cursor-pointer focus:outline-none"
                    onClick={() => toast.dismiss(t.id)}
                    onKeyDown={() => toast.dismiss(t.id)}
                    role="button"
                    aria-label="Close the pop-up window"
                    tabIndex={0}
                >
                    {close}
                </div>
            </div>
        ),
        { position: 'top-center' }
    );
};
