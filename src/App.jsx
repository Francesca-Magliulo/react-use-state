import languages from "./data/languages"
import BaseCardList from "./components/BaseCardList"

function App() {

  return (
    <>
      <h1>Learn Web Development</h1>
      <BaseCardList languages={languages} />
    </>
  )
}

export default App
