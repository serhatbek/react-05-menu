import './App.css';

import { useState } from 'react';
import menu from './data';

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  console.log(menuItems);
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
      </section>
    </main>
  );
}

export default App;
