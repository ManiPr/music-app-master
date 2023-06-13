import './App.css';
import LandingPage from './pages/landing-page/LandingPage'
import Nav from './components/nav/Nav'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Music from './components/music/Music'
import PlayMusic from './components/music-player/MusicPlayer'
import GenresMoods from './pages/browser/genres-moods/GenresMoods'
export default function App() {
  let router=useRoutes(routes)
  return (
    <>
      <Nav></Nav>
      <main className='main'>
        <div className='container'>
          {router}
        </div>
        </main>
        <PlayMusic></PlayMusic>
        <GenresMoods></GenresMoods>
    </>
  );
}
