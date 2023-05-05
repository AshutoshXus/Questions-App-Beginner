import { useState } from 'react'
import Questions from './components/Questions'
import questions from './data'

const App = () => {
  const [allQuestions, setQuestion] = useState(questions)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    setActiveId((currentState) => {
      if (currentState === id) {
        return null
      } else {
        return id
      }
    })
  }

  return (
    <main>
      <Questions
        allQuestions={allQuestions}
        toggleQuestion={toggleQuestion}
        activeId={activeId}
      />
    </main>
  )
}
export default App
