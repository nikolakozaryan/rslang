import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import classes from './FormInput.module.scss';

interface IPropsFormInput {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    name: string;
    type: string;
    placeholder: string;
    dirty: boolean;
    error: string;
}

const FormInput: React.FC<IPropsFormInput> = ({
    label,
    value,
    onChange,
    onBlur,
    name,
    type,
    placeholder,
    dirty,
    error,
}) => {
    const [inputHide, setInputShow] = useState<boolean>(false);

    return (
        <label>
            <p className={classes.explanation}>{label}</p>

            {type === 'password' ? (
                (inputHide && (
                    <div className={classes.inputContainer}>
                        <input
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            name={name}
                            type="text"
                            className={classes.input}
                            placeholder={placeholder}
                        />
                        <Button type="button" className={classes.buttonEye} onClick={() => setInputShow(false)} />
                    </div>
                )) || (
                    <div className={classes.inputContainer}>
                        <input
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            name={name}
                            type={type}
                            className={classes.input}
                            placeholder={placeholder}
                        />
                        <Button type="button" className={classes.buttonEyeHide} onClick={() => setInputShow(true)} />
                    </div>
                )
            ) : (
                <div className={classes.inputContainer}>
                    <input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        name={name}
                        type={type}
                        className={classes.input}
                        placeholder={placeholder}
                    />
                </div>
            )}

            {dirty && error ? <p className={classes.error}>{error}</p> : <p className={classes.transparent}>Error</p>}
        </label>
    );
};

export default FormInput;
