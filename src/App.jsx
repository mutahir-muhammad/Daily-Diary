import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create.jsx'
import BlogDetails from './BlogDetails.jsx'
import NotFound from './NotFound.jsx'
function App() {
 
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id" element={<BlogDetails />}>
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  )
}

export default App
