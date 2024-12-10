
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwriter/auth"
import { login ,logout} from './store/authslice'




function App() {
 const [loading , setLoading]=useState(true)
 const dispatch = useDispatch()
 
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())}
    })
    .finally(() =>setLoading(false) )
  },[])
 
 return !loading ? (
 <div>
  <div>
    <header/>
    <main>
      {/* <Outlet */}
    </main>
    <footer/>
  </div>
 </div>   
  ) : null
}

export default App
