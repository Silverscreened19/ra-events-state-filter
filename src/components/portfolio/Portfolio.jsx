import React from "react";
import ProjectList from "../projectList/ProjectList";
import Toolbar from "../toolbar/Toolbar";

export class Portfolio extends React.Component {
  state = { selected: "All" };

  constructor(props) {
    super(props);
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.selected = this.state.selected;
    this.select = this.select.bind(this);
    this.projects = this.projects.bind(this);
  }

  select(e) {
    this.selected = e.target.innerText;
    this.setState(() => ({ selected: this.selected }));
  }

  projects = () => {
    const { projectData } = this.props;
    const project =
      this.selected === "All"
        ? projectData
        : projectData.filter((el) => el.category === this.selected);
    return project;
  };

  render() {
    const projects = this.projects();
    return (
      <>
        <div>
          <Toolbar
            selected={this.state.selected}
            filters={this.filters}
            onSelectFilter={this.select}
          />
        </div>
        <ProjectList project={projects} />
      </>
    );
  }
}

export default Portfolio;
