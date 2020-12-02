import React from 'react';
import Input from '@material-ui/core/Input';
import classes from './customInput.module.css';

function isInvalid({valid, touched, shouldValidate}) {
	return !valid && shouldValidate && touched;
}

const CustomInput = props => {

	const htmlFor = `${props.type}-${Math.random()}`;
	const cls = [classes['custom-input']];

	if (isInvalid(props)) {
		cls.push(classes.invalid);
	}

	return (
		<div className={cls.join(' ')}>
			<label className={classes['test-label']} htmlFor={htmlFor}>{props.label}</label>
			<Input
				id={htmlFor}
				className={classes['test-input']}
				type={props.type}
				value={props.value}
				onChange={props.onChange}
			/>
			{
				isInvalid(props)
					? <span>{props.errorMessage || 'Вы ввели некоректные данные'}</span>
					: null
			}
		</div>
	)
}

export default CustomInput;