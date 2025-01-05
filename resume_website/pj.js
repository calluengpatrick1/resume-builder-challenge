const counter = document.querySelector(".counter-number");
async function updateCounter(){
	let response = await fetch("https://axweejx2xqcqminuiqagdfj4fa0pnwbs.lambda-url.ap-southeast-2.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Views: ${data}`;
}

updateCounter();