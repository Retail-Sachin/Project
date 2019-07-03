import React from 'react';
export class home extends React.Component {
	rendor(){
		return {
			<div>
			<form>
			<label>
			Name:
			<input type="text" name="name" />
			</label>
			<input type="submit" value="Submit" />
			</form>

			</div>
		};
	}
}