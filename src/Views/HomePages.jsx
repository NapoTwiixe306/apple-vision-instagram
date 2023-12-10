import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Widget/Sidebar'
import Navbar from '../Widget/Navbar'
import Warren from '../img/Legend/Warren.png'
function HomePages() {
  return (
    <>
      <div className="Home__Container">
        <div className="Home">
          <div className="Content">
            <div className="Home__Posts">
              <div className="Posts">
                <div className="Publication">
                </div>
                <div className="Stat">
                  <p>
                    <strong>
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: 'red' }}
                      />{' '}
                      20 004 Likes -{' '}
                      <FontAwesomeIcon
                        icon={faComment}
                        style={{ color: 'white' }}
                      />{' '}
                      5889 Commentaires -{' '}
                      <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ color: 'white' }}
                      />{' '}
                      527 Signet
                    </strong>
                  </p>
                </div>
              </div>
              <div className="Legend">
                <img src={Warren} alt="" />
                <div className="txt">
                  <p>
                    <strong>Warren Buffet</strong>
                  </p>
                  <p>
                    <strong>0 Following - 1.6M Followers</strong>
                  </p>
                  <p>
                    <strong>10 Posts</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="Home__Suggestion">
              <div className="Suggestion__Content">
                <p>Suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
      <Navbar />
    </>
  )
}

export default HomePages