import "./task-info.scss"
import avatar from '../../assets/Images/img.png';

export const Taskinfo = ({ taskInfo }) => {
  return(
    <div className="TaskInfo">
      <div className="PersonInfo">
        <img width={60} height={60} src={avatar} alt="avatar" />
        <div className="PersonInfoText">
          <span className="TodoText">{taskInfo.title}</span>
          <span className="TodoTextInfo">{taskInfo.description}</span>
        </div>
      </div>
    </div>
  )
}
