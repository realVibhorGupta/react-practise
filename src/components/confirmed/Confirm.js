// @flow
import React from "react";
import { useLocation } from "react-router";

const Confirm = () => {
	const { state } = useLocation();
	return (
		<div>
			{state && (
				<h1>
					Congratulations @<em>{state.name}</em>
				</h1>
			)}
			<h1>
				Congratulations @<em>{state.name}</em>
			</h1>
			<div>
				<p>
					You are registered for the event and now you can watch your own
					events.
				</p>
				{state && (
					<p>
						We will send more details on your Email @ <em>{state.email}</em>
					</p>
				)}
			</div>
		</div>
	);
};

export default Confirm;
