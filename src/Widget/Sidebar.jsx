import arrow from '../img/Sidebar/location-arrow.svg'
import heart from '../img/Sidebar/heart.svg';
import search from '../img/Sidebar/search.svg'
import explore from '../img/Sidebar/wpexplorer.svg'
function Sidebar(){
    return (
        <>
            <div className="Sidebar__Container">
                <div className="Sidebar">
                    <div className="Sidebar__icons">
                        <img src={arrow} alt=""/>
                        <img src={heart} alt=""/>
                        <img src={search} alt=""/>
                        <img src={explore} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;