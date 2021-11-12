import React from 'react';
import Dados  from './Dados';
import Alunos from './Alunos';

export default function Corpo(){
     const cnl='CFB cursos'
     const yt='Yt cbf-curso de react'
     const crs='REACT'

    return(
     <section>

       <h2>Manipulando Props</h2>
       <Dados 
       canal={cnl}
       youtube={yt}
       curso={crs}
       />
       <Alunos
       aluno1=' allan tavares'
       aluno2=' rodrigo santana'
       aluno3=' kurt cobaim'
     />
     </section>

    )

}