import React, {useState} from 'react';

import './App.css';


export default function App (){
  const [title, setTitle] = useState('hello word 3');
  const [showContent, setShowContent] = useState(false)


  function handleTitle(){
    setTitle('estado modificado');
  }
  function handleContent(){
    setShowContent(!showContent);
  }

    
  

  return( 
    <div>
      
      <h1 style={{color:'white'}}>{title}</h1>
      {showContent &&  <Conteudo  />}
     <button onClick={handleContent}>{showContent ? 'Clique para esconder o conteudo ':'Clique para exibir conteudo'}</button>
      &nbsp;
      <button onClick={handleTitle}> {title ? 'ESTADO MODIFICADO':'OK'}</button>
    </div>
  )
}

function Conteudo(){
  return <h2 style={{color:'white'}} >conteúdo excluisivo e fora de série</h2>
}
  


