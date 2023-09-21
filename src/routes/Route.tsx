import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import { SignIn } from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
const RouteProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default RouteProvider