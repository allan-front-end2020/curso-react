import React from 'react';
import Dados from './Dados'

export default function Corpo(){
    const canal =()=>{
      return'Aprendendo React'
    }
    const youtube =()=>{
      return'treinando sem parar'
    }
    const curso=()=>{
      return' Não pode desanimar'  
    }


    const somar =(v1, v2)=>{
      return v1+v2
    }
     

    return(
     <section>
     <Dados
       canal={canal}
       youtube={youtube}
       curso={curso}
       
       somar={somar}

     />
       
     
     </section>

    )

}