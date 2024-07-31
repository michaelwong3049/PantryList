import { AppBar } from '@mui/material'
import Header from '../components/Header'

export const metadata = {
  title: 'Pantry-Tracker-App',
  description: 'Track Your Food',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        
        </body>
    </html>
  )
}
