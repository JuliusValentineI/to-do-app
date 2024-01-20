// Puedes acceder a la variable de entorno directamente en tu código
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import React, {useEffect, useState} from 'react';
import '../styles/globals.css'

const Home = () => {
	const [htmlContent, setHtmlContent] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${apiUrl}/api/hello/`);
				const data = await response.text();
				setHtmlContent(data)
			} catch (e) {
				console.log(e)
			}
		}

		fetchData()
	}, []);

	return (
	<div>
			<h1> HTML CONTENT </h1>
			<div dangerouslySetInnerHTML={{ __html: htmlContent}} />
		</div>
	)
}

export default Home;
