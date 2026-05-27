import { useState, useEffect} from 'react'
import Navigation from "./components/Navication";
import PostCard from "./components/PostCard";
import StoriesCarousel from "./components/StoriesCarousel";

import './App.css'

function App() {

  const [currentUser, setCurrentUser] = useState({
    userName : "khy_0811",
    name : "김혜영",
    avatar : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    bio : "안녕하세요, 김혜영 입니다."
  });
  const [currentView, setView] = useState("feed"); // "feed" | "profile"
  const [darkMode, setDarkMode] = useState(false); // 기본은 밝은 화면
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className='app-container'>

        
        <Navigation
        currentView={currentView}
        setView={setView}
        darkMode={darkMode}
        setDartMode={setDarkMode}
        onOpenCreate={() => setIsCreateOpen(treu)}
        currentUser={currentUser}
        />

        <main className="main-canvas">
            <div className="layout-content">
                <div className="feed-layout">
                    <div className="feed-column">
                        
                        <StoriesCarousel/>
                        <PostCard/>
                   
                    </div>
                </div>
            </div>

        </main>
       

    </div>
  )
}

export default App
