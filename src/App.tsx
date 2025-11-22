import { RouterProvider } from "react-router-dom"
import router from "./router/inedsx"

const App = () => {
  return (<>
    <RouterProvider router={router} />
  </>)
}

export default App