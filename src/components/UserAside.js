import React from "react";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, userName}) => {
	return (
		<aside className="col-sm-2">
			<div className="panel panel-default">
				<div className="panel-body">
					<img 
						width="200"
						height="200"
						src={profileImageUrl || DefaultProfileImage} 
						alt={userName} 
						className="img-thumbnail"
					/>
				</div>
			</div>
		</aside>
	)
	
}

export default UserAside;