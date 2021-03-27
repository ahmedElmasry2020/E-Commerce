
import './App.css';
import Nav from './components/nav/nav.components'
import ShopItem from './components/shop_item.components/shop_item'
function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <ShopItem imgUrl="https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" description="hhhh" price="12.5" />
    </div>
  );
}

export default App;
