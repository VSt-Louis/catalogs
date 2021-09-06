import React from 'react';
declare type Props = {
    children: React.ReactNode;
    dismissable: boolean;
    visible?: boolean;
    close: () => void;
};
export declare const Modal: ({ children, dismissable, visible, close }: Props) => JSX.Element | null;
export default Modal;
