import React from 'react';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async () => {
	try {
		const response = await fetch(`${apiUrl}/api/get_task/`)
		const data = await response.json()
		return data;
	}	catch (e) {
		console.log(e)
	}
}

