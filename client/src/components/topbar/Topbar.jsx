import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      {/* Start TopBar Left */}
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      {/* End TopBar Left */}

      {/* Start TopBar Center */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friend, post or video"
          />
        </div>
      </div>
      {/* End TopBar Center */}

      {/* Start TopBar Right */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
      {/* End TopBar Right */}
    </div>
  );
};

export default Topbar;
