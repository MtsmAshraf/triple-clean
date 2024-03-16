import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import { Hero } from './component/Hero/Hero';
import MainForm from './component/MainForm/MainForm';
import { Provider } from 'react-redux';
import store from './store/store';
import Loader from './component/Loader/Loader';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Loader />
        <Header />
        <Hero />
        {/* <div className="container"> */}
          <MainForm>
          </MainForm>
        {/* </div> */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
