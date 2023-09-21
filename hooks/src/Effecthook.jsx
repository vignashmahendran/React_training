import React, { useEffect } from 'react'

function Effecthook({count}) {
    useEffect(()=>{console.log("sideEffect"+count)},[count])
  return (<>
    </>
  );
}

export default Effecthook