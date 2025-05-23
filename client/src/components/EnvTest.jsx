// src/components/EnvTest.jsx
export default function EnvTest() {
  return (
    <div style={{padding: '20px', background: '#f0f0f0'}}>
      <h3>Environment Variables:</h3>
      <p>API_URL: {import.meta.env.VITE_API_URL}</p>
      <p>MAP_KEY: {import.meta.env.VITE_MAP_API_KEY?.substring(0, 4)}...</p>
    </div>
  )
}
