import React, {Component} from "react";

class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			userName: "",
			password: "",
			profileImageUrl: ""
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const authType = this.props.signUp ? "signup" : "signin";
		this.props.onAuth(authType, this.state)
		.then(() => {

			this.props.history.push("/");
		}).catch(() => {
			return;
		});
	}

	render() {
		const {email, userName, password, profileImageUrl} = this.state;
		const {heading, buttonText, signUp, errors, history, removeError} = this.props;
		
		history.listen(() => {
			removeError();
		})

		return(
			<div>
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && (<div className="alert alert-danger">{errors.message}</div>)}
							<label htmlFor="email">Email:</label>
							<input 
								type="text" 
								id="email" 
								name="email" 
								onChange={this.handleChange} 
								value={email} 
								className="form-control"
							/>
							<label htmlFor="password">Password:</label>
							<input 
								type="password" 
								id="password" 
								name="password" 
								onChange={this.handleChange} 
								value={password} 
								className="form-control"
							/>
							{signUp && (
								<div>
									<label htmlFor="username">Username:</label>
									<input 
										type="text" 
										id="username" 
										name="userName" 
										onChange={this.handleChange} 
										value={userName} 
										className="form-control"
									/>
									<label htmlFor="image-url">Profile Image URL:</label>
									<input 
										type="text" 
										id="image-url" 
										name="profileImageUrl" 
										onChange={this.handleChange} 
										value={profileImageUrl} 
										className="form-control"
									/>	
								</div>
								)
							}
							<button type="submit"  className="btn btn-primary btn-block btn-lg">{buttonText}</button>
						</form>
					</div> 
				</div>
			</div>
		)
	}
}

export default AuthForm;