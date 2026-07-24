import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import "./App.scss";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
          <main className="main-block">
            <div className="container">
              <AppRouter />
            </div>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

