import React from 'react';

const Input = props => {
    const { htmlFor, name, onChange, value, type, label, error } = props;
    return(
        <div className="form-group">
            <label 
                htmlFor={htmlFor}>{label}</label>
            <input 
                name={name}
                onChange={onChange}
                value={value}  
                type={type} 
                className="form-control" 
                id={htmlFor} />
            { error && <div className="alert alert-danger">{error} </div> }
        </div>
    )
};

export default Input

