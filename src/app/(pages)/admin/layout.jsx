import React from "react";

const AdminTemplate = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-1/3">side bar</div>

            <div className="flex-1">{children}</div>
        </div>
    );
};

export default AdminTemplate;
