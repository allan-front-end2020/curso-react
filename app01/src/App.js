import React from 'react';
import Header from './componentes/Header';
import Corpo  from './componentes/Corpo';
import Alunos from './componentes/Alunos';
import Botao from './componentes/Botao';





export default function App (){

  const aln1 ='luiz tavares'
  const aln2 ='maria souza'
  const aln3 ='fernando lucio'
  const aln4 ='valentina aguiar'
   
  return( 
    <>
     <Header/>
     <Corpo/>
     <Alunos 
       aln1={aln1}
       aln2={aln2}
       aln3={aln3}
       aln4={aln4}
      
     />
     <Botao/>
     
    </>
  )
}


