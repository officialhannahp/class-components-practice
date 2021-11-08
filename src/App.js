import HockeyTeam from './components/HockeyTeam'
import './App.css';

function App() {
  return (
    <>
      <h1>Welcome to My Hockey Site!</h1>
      <h2>Teams</h2>

      <HockeyTeam 
        teamName="Seattle Kraken"
        homeTown="Seattle, WA" 
        wins={52} 
        loses={0} 
        otl={0} />

        <HockeyTeam 
        teamName="Las Vegas Golden Knights" 
        homeTown="Las Vegas, NV" 
        wins={37} 
        loses={13} 
        otl={2} />
      
      <HockeyTeam 
        teamName="Florida Panthers" 
        homeTown="Sunrise, FL" 
        wins={35} 
        loses={14} 
        otl={5} />
      
    </>
  );
}

export default App;
