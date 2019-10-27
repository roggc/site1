import combine from '../../redux/combineReducers'
import menu from '../menu/reducer'

const app=
(val={},act)=>
{
  switch (act.type)
  {
    case '':
      val=
      {
        ...val
      }
      return val
    default:
      return val
  }
}

export default
combine
(
  {
    menu
  }
)
