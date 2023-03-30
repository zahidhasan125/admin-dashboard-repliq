import React from 'react';

const CustomBtn = ({ children, borderColor, textColor, btnText, handler=null, extraClass='' }) => {
    return (
        <div onClick={handler} className={`border flex ${borderColor} ${textColor} py-2 px-3 rounded-md cursor-pointer font-bold bg-inherit uppercase items-center gap-2 ${extraClass}`}>
            {children}
            {btnText}
        </div>
    );
};

export default CustomBtn;