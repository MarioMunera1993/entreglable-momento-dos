import { BrowserRouter} from "react-router-dom"
import { RouterApp } from "./routes/routerApp"

function App() {

  return (
    <>
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter>
    </>
  )
}

export default App
