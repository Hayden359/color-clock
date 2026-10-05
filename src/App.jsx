import { useState, useEffect } from 'react'
import { format } from 'date-fns'

function App() {
  const [time, setTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #eaf1ff, #ffffff)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '40px 60px',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        textAlign: 'center',
        border: '3px solid #3f6fd1'
      }}>
        <h1 style={{
          margin: 0,
          marginBottom: '20px',
          color: '#3f6fd1',
          fontSize: '2.2em'
        }}>
          Color Clock
        </h1>

        <p style={{
          fontSize: '2em',
          fontWeight: 'bold',
          color: '#00ff40',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          {time}
        </p>
      </div>
    </div>
  )
}

export default App
