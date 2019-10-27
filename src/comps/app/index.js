import React,{useReducer} from 'react'
import {Div} from './styled'
import Header from '../header/index'
import Content from '../content/index'
import Footer from '../footer/index'
import {BrowserRouter as Router} from 'react-router-dom'
import state from './state'
import reducer from './reducer'

export default
()=>
{
  const [state1,dispatch1]=useReducer(reducer,state)
  const el=
  <Div>
    <Router>
      <Header state={state1} dispatch={dispatch1}/>
      <Content/>
      <Footer/>
    </Router>
  </Div>
  return el
}
