import {useState,React} from 'react'
import {useNavigate, Outlet} from "react-router-dom"
import Numerical from "./Numerical.jsx"
import Reasoning from "./Reasoning.jsx"

var N = ["Ratio","Speed","Simple Interest","Equations","Time"];
var R = ["Family Relation","Cryptography","Directions","Equations","Time"];


const Demo = () => {
    const navigate = useNavigate();
    const [active,setActive] = useState("");    

  return (
    <div className="flex flex-col justify-center mt-12">
        <div className="flex flex-col justify-center">
            {/*Tabs*/}
            <div className="flex flex-row border-2 border-base-300 bg-white">
            <button className={`border-r-2 border-black p-1 ${active === "Numerical" ? "bg-blue-500 text-white" : ""}`} onClick={()=>
              {
          setActive("Numerical");
          navigate("/Demo/Numerical");
        }}>Numerical</button>
            <button className={`border-r-2 border-black p-1 ${active === "Reasoning" ? "bg-blue-500 text-white" : ""}`} onClick={()=>{
              setActive("Reasoning");
              navigate("/Demo/Reasoning");}}>Reasoning</button>
            </div>
            {/* */}
                
            {/*Body*/}
            <div>
                  {/* Dynamic content renders here */}
      <div className=" rounded shadow">
        <Outlet />
      </div>

            </div>
            {/* */}

        </div>
    </div>
  )
}

export default Demo
