import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './pages/Layout'
import NBScoreCard from './components/NBSscoredCard'
import AccountsOverview from './components/AccountsOverview'
import NBScoreHistory from './components/NBScoreHistory'
import Stand from './components/Stand'
import Footer from './components/Footer'

function App() {
  const [score, setScore] = useState(767);

  return (
    <div>
     <Layout>
      <NBScoreCard score={score} setScore={setScore} />
      <AccountsOverview />
      <NBScoreHistory  />
      <Stand score={score} />
      <Footer />
     </Layout>
    </div>
  )
}

export default App
