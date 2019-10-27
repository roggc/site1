import React from 'react'
import {Div} from './styled'
import Menu from '../menu/index'

export default
(props)=>
{
  const el=
  <Div>
    <div>wellcome to react</div>
    <Menu {...props}/>
  </Div>
  return el
}
