import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

function SingleQuestion({ question, toggleQuestion, activeId }) {
  //const [showInfo, setShowInfo] = useState(false)

  const isActiveId = question.id === activeId

  return (
    <div className="question">
      <header>
        <h5> {question.title} </h5>
        <button
          className="question-btn"
          onClick={() => {
            //setShowInfo(!showInfo)
            toggleQuestion(question.id)
          }}
        >
          {isActiveId ? <FaMinus /> : <FaPlus />}
        </button>
      </header>

      {isActiveId && <p>{question.info}</p>}
    </div>
  )
}
export default SingleQuestion
