import React , {useState}from 'react';
import './App.css'



export default function App (){


  const [num,setNum]=useState(1)
  

   
  return( 
    <>
      <p>Quantidade de produtos {num}</p>
     <p>valor do state:{num}</p>
     <button className='botao' onClick={()=>setNum(num+1)}>Adicionar + </button>

     <button className='botao'  onClick={()=>setNum(num-1)}>Tirar - </button>
     
    </>
  )
}


