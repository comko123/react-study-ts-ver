import {ReactQueryDevtools} from "react-query/devtools"
import Rout from "./Rout"
function App() {

  return (
    <>
    <Rout/>
    <ReactQueryDevtools initialIsOpen={true}/>
    </>
  )
}

export default App;
