import { AppRouter } from './router/AppRouter';
import "./App.scss";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HashRouter } from 'react-router-dom';

export const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Header/>
          <main className="main-block">
            <div className="container">
              <AppRouter />
            </div>
          </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

