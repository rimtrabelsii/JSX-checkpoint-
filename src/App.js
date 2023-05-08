
import './App.css';
import Address from './component/Address';
import FullName from './component/FullName';
import Commandes from './component/profile/Commandes';
import Pic from './component/profile/Pic';


import ProfilePhoto from './component/profile/ProfilePhoto';


function App() {
  return (
    
  <div> 
  <ProfilePhoto/>
  <FullName/>
  <Address/>
  <Commandes/>
  <Pic/>
  </div>
  );
}

export default App;
