import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="max-width  header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ02i1Nwx1GsOmZG5JjnLe3_jxJ3GnsalXoA&usqp=CAU"
            alt="logo here"
            className="header-logo"
            />
           <div className="header-right">
                <div className="headerlocation-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                        <i className="fas fa-map-marker-alt absolute-center location-icon"></i>
                        <div>Coimbatore</div>
                        </div>
                        <i className="fas fa-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-seperator"></div>
                    <div className="header-searchBar">
                    <i className="fas fa-search absolute-center search-icon"></i>
                    <input placeholder="Search for restaurant ,cuisine or a dish" className="search-input"
                    />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                    alt="profile" className="header-profile-image"
                    />
                    <span  className="header-username">Thiliban</span>
                    <i className="fas fa-angle-down absolute-center profile-options-icons"></i>
                </div>
           </div>
        </div>
    )
}

export default Header
