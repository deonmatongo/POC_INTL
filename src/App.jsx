import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import CookieConsent from "@/components/CookieConsent"

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <CookieConsent />
    </>
  )
}

export default App 