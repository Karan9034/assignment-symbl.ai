import {useState, useEffect} from 'react';
import getData from './utils/getData';
import Header from './components/Header'
import Items from './components/Items'
import Loading from './components/Loading'

const App = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);

    useEffect(() => {
        if(items === null){
            getData().then((data)=>{
                setItems(data)
                setLoading(false)
            })
        }
    }, [items, loading]);
    
    return (
        <div className='container'>
            <Header title="Items List" />
            { loading ? <Loading/> : <Items items={items}/> }
        </div>
    );
}

export default App;
