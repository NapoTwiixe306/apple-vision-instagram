import Sidebar from "../Widget/Sidebar";
import Navbar from "../Widget/Navbar";

function HomePages() {
    return (
        <>
            <div className="Home__Container">
                <div className="Home"></div>
            </div>
            <Sidebar/>
            <Navbar/>
        </>
    )
}

export default HomePages;