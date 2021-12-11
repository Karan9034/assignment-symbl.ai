const getData = async () =>{
    const res = await fetch('http://localhost:8000/');
    const data = await res.json();

    const items = data.data;
    items.sort(function(a, b) { 
        return a.id - b.id;
    })
    return items;
}

export default getData;