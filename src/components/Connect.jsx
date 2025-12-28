import React from 'react'
import { AiTwotoneMessage,AiFillMail } from "react-icons/ai";
import Chat from "../pages/Chat.jsx"
import Mail from "../pages/Mail.jsx"
import {useNavigate} from 'react-router-dom'
const Connect = () => {
    const navigate = useNavigate(); 
  return (
    <div className="">
        <AiTwotoneMessage className="fixed size-10 bottom-10 right-12 cursor-pointer hover:size-12" onClick={()=> navigate("/Chat")}></AiTwotoneMessage>
        <AiFillMail className="fixed size-10 bottom-3 right-3 cursor-pointer hover:size-12" onClick={()=> navigate("/Mail")}></AiFillMail>
    </div>
  )
}

export default Connect
