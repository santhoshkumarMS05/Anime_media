import './App.css';
import { Routes,Link,Route,Outlet, useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from "./EditPost";
import { DataProvider } from './context/DataContext';


function App() {
  
  return (
    <div className="App">
      <DataProvider>
        <Header title="Anime Media" />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="post">
            <Route
              index
              element={
                <NewPost />
              } />
            <Route
              path=":id"
              element={
                <PostPage />
              } />
          </Route>
          <Route path='/edit/:id' element={<EditPost />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
