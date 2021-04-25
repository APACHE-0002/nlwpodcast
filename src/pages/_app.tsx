import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';

import styles from '../styles/app.module.css';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
      <div className={styles.wrapper}>
      <div className="all">
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        </div>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp;
 