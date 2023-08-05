// @flow
import React from "react";
import { useParams } from "react-router";

const Category = () => {
	const { catId } = useParams();
	return <div> Hello cate Lorem, ipsum dolor.lorem5</div>;
};

export default Category;
