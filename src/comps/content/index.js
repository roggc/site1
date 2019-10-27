import React from 'react'
import {Div} from './styled'
import {Route,Switch} from 'react-router-dom'
import Home from '../home/index'
import About from '../about/index'

export default
()=>
{
  const el=
  <Div>
    <Switch>
      <Route path='/' exact render={()=><Home/>}/>
      <Route path='/about' exact render={()=><About/>}/>
    </Switch>
  </Div>
  return el
}
