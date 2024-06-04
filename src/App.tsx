import { Toaster } from "./components/ui/sonner"
import LoginPage from "./pages"

function App() {

  return (
    <main className="flex items-center justify-center h-screen bg-base">
      <LoginPage />
      <Toaster />
    </main>
  )
}

export default App
