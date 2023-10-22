import Sidebar from "../Widget/Sidebar";
import Navbar from "../Widget/Navbar";

function HomePages() {
    return (
        <>
            <div className="Home__Container">
                <div className="Home">
                    <div className="Content">
                        <div className="Home__Posts">
                            <div className="Publication">
                                <p>Publication</p>
                            </div>
                            <div className="Legend">
                                {/*img*/}
                                <p><strong>Warren Buffet</strong></p>
                                <p><strong>0 Following - 1.6M Followers</strong></p>
                                <p><strong>10 Posts</strong></p>
                            </div>
                        </div>
                        <div className="Home__Suggestion">
                            <div className="Suggestion__Content">
                                <p>Suggestion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar/>
            <Navbar/>
        </>
    )
}

export default HomePages;