
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Banner from './pages/Header/Banner/Banner';
import Navigation from './pages/Header/Navigation/Navigation';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Service from './pages/Service/Service';
import Medication from './pages/Medacation/Medication';
import Lab from './pages/Lab&/Lab';
import NotFound from './pages/NotFound/NotFound';
import Handel from './pages/Home/HandelButton/Handel';
import AughtProvider, { AuthContext } from './context/AughtProvider';
import PrivetRoute from './Privet/PrivetRoute';
import Datiels from './pages/Home/Docters/DocterDtailes/Datiels';

function App() {
  return (
    <>
      <AughtProvider>

 <Router>
 <Navigation></Navigation>

 <Switch>
   <Route exact path='/'>
   <Banner></Banner>
     <Home></Home>
   </Route>
   <Route exact path='/home'>
   <Banner></Banner>
     <Home></Home>
   
    
   </Route>
   <Route path='/signup'>
    
<SignUp></SignUp>
   </Route>
   <Route path='/login'>
     <LogIn></LogIn>
   </Route>
   <PrivetRoute path="/handel">
   <Handel></Handel>
    </PrivetRoute> 

   <Route path="/service">
     <Service></Service>
   </Route>
   <Route path="/medication">
     <Medication></Medication>
   </Route>
   <PrivetRoute path="/lab">
     <Lab></Lab>
   </PrivetRoute>
   
   <Route path='/*'>

<NotFound></NotFound>
   </Route>
 </Switch>
<Footer></Footer>
 </Router>
 </AughtProvider>
    </>
  );
}

export default App;
