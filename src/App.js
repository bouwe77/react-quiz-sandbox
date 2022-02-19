import { lazy, Suspense, useState } from 'react'

const howMany = 2

const samples = []
for (let i = 1; i <= howMany; i++) {
  samples.push(lazy(() => import(`./${i}`)))
}

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const CurrentSample = samples[currentIndex]

  return (
    <>
      Choose the sample:
      <div style={{ margin: '20px 0' }}>
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
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentSample />
        </Suspense>
      </div>
    </>
  )
}

export default App
