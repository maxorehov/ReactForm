import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import classes from './form.module.css';
import CustomInput from '../ui/input/customInput';



export default class Form extends Component {

	state = {
		formControls: {
			name: {
				value: '',
				type: 'text',
				label: 'Enter your name:',
				errorMessage: 'Имя должно быть не меньше 3-х символов',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLngth: 3
				}
			},
			email: {
				value: '',
				type: 'email',
				label: 'Enter your email:',
				errorMessage: 'Введите корректный e-mail',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			file: {
				value: '',
				type: 'file',
				label: 'Add your CV:',
				validation: {
					required: true,
				}
			},
		}
	}

	sendSummary = () => {

	}

	submitHandler = event => {
		event.preventDefault();
	}

	validateControl(value, validation) {
		
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls };
		const control = { ...formControls[controlName] };
		control.value = event.target.value;
		control.touched = true;
		control.valid = this.validateControl(control.value, control.validation);
		formControls[controlName] = control;

		Object.keys(formControls).forEach(name => {

		});
		this.setState({
			formControls
		});

	}

	

	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName];
			return (
				<CustomInput
					key = {controlName + index}
					type = {control.type}
					value = {control.value}
					label = {control.label}
					valid = {control.valid}
					touched = {control.touched}
					shouldValidate = {!!control.validation}
					errorMessage = {control.errorMessage}
					onChange = {event => this.onChangeHandler(event, controlName)}

				/>
			);
		});
	}
	


	render() {
		return (
			<div className={classes['main-form']}>
				<div>
					<h1>Add your CV</h1>
					<form className={classes['send-form']} onSubmit={this.submitHandler}>
						{this.renderInputs()}
						<Button
							className={classes['btn-style']}
							variant="contained"
							color="primary"
							type="success"
							onClick={this.sendSummary}
						>SEND</Button>
					</form>
					<a href="/admin">Go to admin page</a>
				</div>
			</div>
		)
	}
}







// function Form() {
// 	return (
// 		<div>
// 			<h1>This is Main page</h1>
// 			<a href="/admin">Go to admin page</a>
// 		</div>
// 	);
	
// }

// export default Form;