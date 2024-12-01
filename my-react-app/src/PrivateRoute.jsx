import  {Route, Navigate} from "react-router-dom"

const PrivateRoute = ({element:Element,...rest})=>{
    const token = localStorage.getItem("token")
return(
    <div>
    <Route 
    {...rest}
    element={token ? <Element /> : <Navigate to="/login" />}
    
    
    />
    
    </div>
)
}

 export default PrivateRoute