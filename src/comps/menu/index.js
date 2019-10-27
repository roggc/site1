import React from 'react'
import {Div} from './styled'
import Modal from '../modal/index'

export default
({state,dispatch})=>
{
  const toggleModal=
  e=>
  dispatch({type:'MENU_TOGGLE_MODAL'})
  const el=
  <Div>
    <button onClick={toggleModal}>menu</button>
    {state.menu.showModal&& <Modal/>}
  </Div>
  return el
}
