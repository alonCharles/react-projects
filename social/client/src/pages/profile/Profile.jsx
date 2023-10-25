import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt=""/>
                    <img className="profileUserImg" src="assets/person/7.jpeg" alt=""/>
                </div>
               <div className="profileInfo">
                <h4 className="profileInfoName">Alon Charles</h4>
                <span className="profileInfoDesc">Software Developer</span>
               </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
