import React, { useState } from 'react'

function Review() {
    const [range, setRange] = useState(0)
    const [commit, setCommit] = useState("")


    const send= () =>{
        if(range <= 3 && commit.length >= 10){
            alert("Please sent a commit")
        } else {
            console.log("Thank you")
        }
    }
  return (
    <div>
      <p>score</p>
      {/* <input type="range" onChange={(e)=> setRange(e.target.value)} min={0} max={0}/> */}
      <p>commit: </p>
      <textarea cols={30} rows={10}></textarea>
      <input type="submit" onClick={send} />
    </div>
  )
}

export default Review
