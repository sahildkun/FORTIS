import React from 'react'
import Navbar from './navbar'
import AuthStatus from './AuthStatus'
type Props = {}




const Header = async (props: Props) => {
 
 
  return (
    <>
    <Navbar>
     {/* @ts-expect-error Server Component  */}
      {/* <AuthStatus/> */}
    </Navbar>
    </>
  )
}

export default Header