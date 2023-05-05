import SingleQuestion from './SingleQuestion'

function Questions({ allQuestions, toggleQuestion, activeId }) {
  return (
    <section className="container">
      <h1> Questions </h1>
      <header>
        {allQuestions.map((question) => {
          return (
            <SingleQuestion
              question={question}
              toggleQuestion={toggleQuestion}
              activeId={activeId}
            />
          )
        })}
      </header>
    </section>
  )
}
export default Questions
