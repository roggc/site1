import React from 'react'
import {Div} from './styled'
import {Link} from 'react-router-dom'

export default
()=>
{
  const el=
  <Div>
    <div><Link to='/'>home</Link></div>
    <div><Link to='/about'>about</Link></div>
  </Div>
  return el
}
