import React from 'react'

function Tokens() {
    let username=localStorage.getItem("name");
    console.log(localStorage)
  return (
    <div>
      hello tokens page {username} (name directly came from local storage)
    </div>
  )
}

export default Tokens
