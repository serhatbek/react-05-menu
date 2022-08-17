import './App.css';

import { useState } from 'react';
import menu from './data';
import Categories from './components/Categories';
import Menu from './components/Menu';

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  console.log('app items', menuItems);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
