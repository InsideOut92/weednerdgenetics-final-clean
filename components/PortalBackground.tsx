"use client";
export default function PortalBackground(){
  return (
    <div aria-hidden style={{position:'fixed',inset:0,zIndex:-1,overflow:'hidden'}}>
      <div style={{position:'absolute',right:-120,top:-80,width:520,height:520,background:'radial-gradient(circle at 30% 30%, rgba(46,160,67,0.18), transparent 20%)',filter:'blur(80px)'}} />
      <div style={{position:'absolute',left:-160,bottom:-120,width:420,height:420,background:'radial-gradient(circle at 60% 60%, rgba(138,43,226,0.12), transparent 20%)',filter:'blur(120px)'}} />
    </div>
  )
}
