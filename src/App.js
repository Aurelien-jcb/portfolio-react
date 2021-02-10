import { AnimatePresence } from 'framer-motion';
import Contact from './pages/Contact';
import Home from './pages/Home';
import React, { useEffect } from 'react';
import { 
  Switch, 
  Route, 
  useLocation, 
  useHistory, 
  Redirect } from 'react-router-dom';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + '/';
      const timeOut = 500;
      const wheelRouter = (before, after) => {
        if (e.wheelDeltaY < 0 ) {
          setTimeout(() => {
            history.push(after);
          }, timeOut);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, timeOut);
        }
      }

      switch (window.location.href.toString()) {
        case url: 
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push('project-1')
            }, timeOut);
          }
          break;
        case url + "project-1":
          wheelRouter("", "project-2");
          break;
        case url + "project-2":
        wheelRouter("project-1", "project-3");
          break;
        case url + "project-3":
          wheelRouter("project-2", "project-4");
          break;
        case url + "project-4":
          wheelRouter("project-3", "contact");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push('project-4')
            }, timeOut);
          }
          break;
          default:
            console.log('erreur sur le switch');
      }

    }

    window.addEventListener('wheel', handleScrollToElement)
  }, [history])


  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={Home} />
        <Route exact path='/project-1' component={Project1} />
        <Route exact path='/project-2' component={Project2} />
        <Route exact path='/project-3' component={Project3} />
        <Route exact path='/project-4' component={Project4} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
    </AnimatePresence>
  )
}

export default App;
