const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
	console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
// param1 = Type of HTTP message
// param2 = Where to send this HTTP message
//GET = get some information from the backend
