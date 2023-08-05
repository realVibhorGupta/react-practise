// @flow
import React from "react";

const SplitScreen = ({ left: LEFT, right: RIGHT }) => {
	return (
		<div className="flex">
			<div className="flex-1">
				{" "}
				<LEFT></LEFT>
			</div>
			<div className="flex-1">
				<RIGHT></RIGHT>
			</div>
		</div>
	);
};

export default SplitScreen;
