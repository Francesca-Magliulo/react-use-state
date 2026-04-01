import languages from "./data/languages"
import BaseCardList from "./components/BaseCardList"
import BonusSelector from "./components/BonusSelector"

function App() {

  return (
    <>
      <h1>Learn Web Development</h1>
      {/*<BaseCardList languages={languages} />*/}
      <BonusSelector languages={languages} />
    </>
  )
}

export default App
