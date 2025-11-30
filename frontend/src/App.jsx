import React, {useEffect, useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('carregando...')
  useEffect(()=>{
    fetch('/api/').then(r=>r.json()).then(d=>setMsg(d.message)).catch(()=>setMsg('sem resposta do backend'))
  },[])
  return <div style={{fontFamily:'Arial',padding:20}}>
    <h1>Academia AI</h1>
    <p>{msg}</p>
  </div>
}
