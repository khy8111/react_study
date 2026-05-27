import {
  Home, 
  Search, 
  Compass, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  User, 
  Menu,
  Sun,
  Moon,
  Camera,
  Icon,
  SquarePlay
} from "lucide-react"; // React 프로젝트에서 사용할 수 있는 오픈소스 아이콘 라이브러리

export default function Navigation({
    currentView,
    setView,
    darkMode,
    setDartkMode,
    onOpenCreate,
    currenUser
}) {

    const menuItems = [
        { id: "feed", label : "홈", icon: Home},
        { id: "reels", label : "릴스", icon: SquarePlay},
        { id: "messages", label : "메시지", icon: MessageCircle},
        { id: "search", label : "검색", icon: Search},
        { id: "explore", label : "탐색탭", icon: Compass},
        { id: "notifications", label : "알림", icon: Heart},
        { id: "create", label: "만들기", icon: PlusSquare, action: onOpenCreate },
    ];

    const handleItemClick = (item) => {
        if (item.action) {
        item.action();
        } else {
        setView(item.id);
        }
    };

    return (
        <>
            {/* 1. 사이드바 */}
            <aside className="sidbar">
                <div>
                    {/* 로고 */}
                    <div className="sidebar-logo-container">
                        <h1 className="sidebar-logo" style={{cursor : "pointer"}} onClick={() => setView("feed")}>
                            Instagram
                        </h1>
                        <Camera className="sidbar-logo-icon" style={{cursor : "pointer"}} onClick={() => setView("feed")} />
                    </div>

                    <ul className="sidebar-menu">
                        {menuItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = currentView === item.id;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={()=> handleItemClick(item)}
                                        className={`sidebar-item ${isActive ? "active" : ""}`}
                                        style={{width : "100%", textAlign : "left"}}
                                    >
                                        <IconComponent/>
                                        <span className="sidebar-item-label">{item.label}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* 사이드바 푸터 (화면테마 & 메뉴) */}
                <div className="sidebar-footer">
                    <button
                        className="sidebar-item"
                        onClick={()=> setDartkMode(!darkMode)}
                        title="테마전환"
                        style={{width : "100%", textAlign: "left"}}
                    >
                        {darkMode ? <Sun/> : <Moon/>}
                        <span className="sidbar-item-label">{darkMode ? "라이트 모드" : "다크 모드"}</span>
                    </button>


                </div>

            </aside>
        
        
        </>

    )

}