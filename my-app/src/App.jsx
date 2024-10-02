import banner from './assets/banner.jpg';
import styles from './App.module.css';

import Nav from './components/Nav.jsx';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Nav />
        <img class={styles.banner} src={banner} alt='site banner'/>
      </header>
    </div>
  )
}

export default App;