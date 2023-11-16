import './App.css';
import AddBudget from './components/AddBudget';
import AddDepense from './components/AddDepense';
import Header from './components/Header';
import ListDepense from './components/ListDepense';
import StatsDepenses from './components/StatsDepenses';

function App() {
  return (
    <div className="container">
      <Header />
      <StatsDepenses />
      <div>
        <AddBudget />
        <AddDepense />
      </div>
      <ListDepense />
    </div>
  );
}

export default App;
