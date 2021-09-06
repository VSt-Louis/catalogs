import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    row?: boolean;
    vCenter?: boolean;
    hCenter?: boolean;
    flex1?: boolean;
    h100?: boolean;
    w100?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
} & Record<string, any>;
export declare const Flex: React.ForwardRefExoticComponent<Pick<Props, string> & React.RefAttributes<HTMLDivElement>>;
export default Flex;
