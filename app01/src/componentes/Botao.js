import React from 'react';
import {Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../App.css';


export default function Botao (){
    return(
       <>
     <Button type="primary" icon={<SearchOutlined />} className='botao'>
      Search
      </Button>
        </>
    )
}