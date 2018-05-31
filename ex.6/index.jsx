import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
 <Family lastname = 'Quirino'>
        <Member name='Lucas' />
        <Member name='Felipe'/>
        <Member name='Fulano'/>
        <Member name='Sikera'/>
    </Family>
   /*
    <Family name = 'Uzumaki'>
        <Member lastname='Naruto' />
        <Member lastname= 'Kushina'/>
        <Member lastname= 'Boruto'/>
    </Family>
    */
    , document.getElementById('app'))


