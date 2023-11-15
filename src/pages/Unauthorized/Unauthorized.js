import './styles/unauthorized.css';

export const Unauthorized = () => {
	let view = `<h1>401</h1>
	<h2>UNAUTHORIZED</h2>	`;

	const divElement = document.createElement("div");
	divElement.classList = "unauthorized";
	divElement.innerHTML = view;

	return divElement;
};


