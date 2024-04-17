import classes from './App.module.scss';
import Navbar from './components/layout/Navbar/Navbar';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <div className={classes['c-app']}>
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
