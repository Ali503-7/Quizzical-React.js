import { useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'


function App() {
  const [start, setStart] = useState(false)
  
  return (
      <main>
          <Start
            Start={start}
            setStart={setStart}
          />
        <Quiz
          setStart={setStart}
          Start={start}
        />
      </main>
  )
}

export default App
