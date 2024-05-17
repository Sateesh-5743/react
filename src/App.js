import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
