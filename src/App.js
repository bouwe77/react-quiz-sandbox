import { lazy, Suspense, useState } from 'react'

// When I add a new sample (number folder) I have to increase this number.
const howMany = 2

// Import all folders
const samples = [...Array(howMany)].map((_, index) =>
  lazy(() => import(`./${index + 1}`)),
)

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const CurrentSample = samples[currentIndex]

  return (
    <>
      <div style={{ margin: '20px 0' }}>
        Choose the sample:
        {[...Array(howMany)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{ margin: '5px' }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div style={{ border: '1px solid lightgray', padding: '3px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentSample />
        </Suspense>
      </div>
    </>
  )
}

export default App
