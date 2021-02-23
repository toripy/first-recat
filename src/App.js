import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks = ['Anwar','Jafor',"salman",'bappy','shuvo'];
    const products = [
        {name:'PhotoShop',price:'$90.99'},
        {name:'Illustrator',price:"$60.99"},
        {name:'PDF reader',price: "$6.99"},
        {name:'Premiere El',price:'$600.600'}
    ];
    
    return ( 
        <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" />
        <p>
        Edit < code > src / App.js </code> and save to reload. </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
            nayoks.map(nayok=><li>{nayok}</li>)
        }
        {
            products.map(product=><li>{product.name}</li>)
        }
        
        </ul>
        {
            products.map(pd=><Product product={pd}></Product>)
        }
        
        
        </header>
        </div>
    );
}
function Counter() {
    const [count, setCount] =useState(10);
    
    return(
        <div>
            <h1>Count: {count}</h1> 
            <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setCount(count + 1)}>Increase</button>
        </div>
    )
}
function Users() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h3>Dynamic Users:{users.length}</h3>
           <ul>
           {
               console.log(users)
           }
            {
                users.map(user=><li>{user.phone}</li>)
            }
           </ul>
        </div>
    )
}

function Product(props) {
    const productSyle = {
        border:'1px solid gray',
        borderRadius:'5px',
        backgroundColor: 'lightgray',
        height:'200px',
        width:'200px',
        float:'left'
    }
    const {name,price} = props.product;
    
    return(
        <div style={productSyle}>
            <h3>Name: {name}</h3>
            <h5>price: {price}</h5>
            <button>Buy now</button>
        </div>
    )
}
function Person(props) {
    return(
        <div style={{border:"2px solid gold", width:'400px'}}>
            <h3>My Name: {props.name} </h3>
            <p>My Profession: {props.job}</p>
        </div>
    )
    
}


export default App;