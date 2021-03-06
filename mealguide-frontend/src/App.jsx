import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Profile from './pages/Profile';
import Suggestions from './pages/Suggestions';
import Meals from './pages/Meals';
import Index from './pages/Index';
import EditProfile from './pages/EditProfile';
import NewUser from './pages/NewUser';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = ({id}) => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/index" component={Index} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/suggestions" component={Suggestions} exact={true} />
        <Route path="/editProfile" component={EditProfile} exact={true} />
        <Route path="/newUser" component={NewUser} exact={true} />
        <Route path='/meals/:id' component={Meals} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/index" />} />
        <Route component={() => <Redirect to='/index'/>}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
