import { useState, useEffect } from "react";
import axios from 'axios'
export const useDataSource = (getResourceFunc) => {
	const [resource, setResource] = useState(null);

	useEffect(() => {
		(async ()=>{
			const  result  = await axios.getResourceFunc();
			setResource(result)
	})();
	}, [getResourceFunc])



	return resource;
};


// During using this hook
//We will use callback function because we have removed the function from hooks logic

const serverResource = resourceUrl => async() =>{
	await axios.get(resourceUrl)
			setResource(response.data)
}
const  dataSource = useDataSource( serverResource(`/users/${userId}`))