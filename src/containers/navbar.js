import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Logo from "../images/warbler-logo.png";
import {logOut} from "../store/actions/auth";

class Navbar extends Component {
	logOut = e => {
		e.preventDefault();
		this.props.logOut();
	}
	render() {
		return(
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							<img src={Logo} alt="Warbler Home"/>
						</Link>	
					</div>
				
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav ml-auto">
							<li>
								<Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Messages</Link>
							</li>
							<li>
								<a onClick={this.logOut} href="">
									Log out
								</a>
							</li>
						</ul>
					)
					:
						(<ul className="nav navbar-nav ml-auto">
							<li><Link to="/signup">Sign Up</Link></li>
							<li><Link to="/signin">Sign In</Link></li>
						</ul>)
					}
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps, {logOut})(Navbar)