// Snippet Using Javascript, to be used with Node.js
// Run `npm install` before executing the script.

import fetch from 'node-fetch'

const getData = async () =>{
	const res = await fetch('http://localhost:8000/');
	const data = await res.json();

	const items = data.data;
	items.sort(function(a, b) { 
	    return a.id - b.id;
	})

	for(var index in items)
	    console.log(`id: ${items[index].id}, name: ${items[index].name}`)
}

getData()