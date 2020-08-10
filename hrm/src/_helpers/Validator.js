import React from 'react';
const Validators = (errors) => {
     console.log(errors);
    return ( <><span
                role="alert"
                id="error-name-required"
                style={{
                    color: "red",
                display: errors.type === "required"
                    ? "block"
                    : "none"
                }}
            >
                This is required
            </span>
            <span 
                role="alert"
                id="error-name-maxLength"
                style={{
                    color: "red",
                display: errors.type === "maxLength"
                    ? "block"
                    : "none"
                }}
            >
                Max length exceeded
            </span></>);
}
export default Validators;