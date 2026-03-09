import './App.css'
import teamData from './CollegeBasketballTeams.json'
import type { Team, CollegeBasketballData } from './Type'

function Header() {
  return (
    <header>
      <h1>NCAA College Basketball Teams</h1>
      <p>Explore schools, mascots, and locations for teams across college basketball.</p>
    </header>
  )
}

function Body({ teams }: { teams: Team[] }) {
  return (
    <>
      <div>
        {teams.map((team) => (
          <div className="team-card" key={team.tid}>
            <h2>{team.school}</h2>
            <p>
              <strong>Mascot:</strong> {team.name}
            </p>
            <p>
              <strong>Location:</strong> {team.city}, {team.state}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

function App() {
  const data = teamData as CollegeBasketballData

  return (
    <>
      <Header />
      <Body teams={data.teams} />
    </>
  )
}

export default App
