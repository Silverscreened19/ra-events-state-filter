import { v4 } from "uuid";
import "./ProjectList.css";

function ProjectList(props) {
  const { project } = props;
  return (
    <div className="project">
      <div className="img_wrapper">
        {project.map((el) => (
          <img
            key={v4()}
            src={el.img}
            alt={"photo " + el.category}
            className="img"
          ></img>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
