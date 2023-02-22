import React from 'react';

const Checkbox = ({ isChecked }) => {
    const checkboxClasses = `inline-block ${isChecked ? "" : "hidden"}`;
    return (
        <input
            type="checkbox"
            className={checkboxClasses}
        />
    );
};

export default Checkbox;
