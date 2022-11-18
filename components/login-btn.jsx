import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button'

export default function LoginBtn() {
  const { data: session } = useSession()

  const divStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
  }

  const hStyle = {
    color:"GrayText",
  }

  if (session) {
    return (
      <div style = {divStyle}>
        <h3 style={hStyle}>Signed in as {session.user.email}</h3>
        <Button variant="contained" onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }
  return (
    <div style = {divStyle}>
      <h3 style={hStyle}>Not signed in</h3>
      <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}