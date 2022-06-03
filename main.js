var i=0;
function rece(){
const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'US',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
		'X-RapidAPI-Key': '98f139625emsh4c9f7b4f0e29f81p1553dcjsndbb273a68cba'
	}
};

let search = document.getElementById('search').value;
let para = document.getElementById('para')
let pars = document.getElementById('pas')
fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${search}`, options)
	.then(response =>{
        return response.json()}).then(locate).catch(err => console.error(err));
		fetch(`https://google-search3.p.rapidapi.com/api/v1/image/q=${search}`, options)
		.then(responses =>{
			return responses.json()}).then(locates).catch(err => console.error(err));


        function locate(response)
        {
para.href= `${response.results[i].link}`;
para.innerHTML= `${response.results[i].link}`;
i++;
        }
		function locates(responses)
        {
pars.src= `${responses.image_results[0].image.src}`;
        }
}