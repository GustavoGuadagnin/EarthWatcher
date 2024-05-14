import React from 'react'
import OuterBox from '../styles/Style.tsx' 
import NavBar from './navBar.tsx'
import SideBar from './sideBar.tsx'
const Index = () => {
  return (
    <OuterBox>
      <h1 style={{gridArea:'logo'}} >Logo</h1>
      <NavBar/>
      <SideBar/>
      <h1 style={{gridArea:'content',height:'100vh',border:'1px solid black'}} >content</h1>
      <h1 style={{gridArea:'footer',border:'1px solid black'}} >footer</h1>
      </OuterBox>
  )
}

export default Index