import React, { Component } from "react";

import Pannel from "./pannel";

class sidebar extends Component {
  listPeople() {
    return (
      <ul className="list-group ">
        {" "}
        {this.props.contact.map(ppl => (
          <li className="list-group-item " key={ppl.name}>
            <a
              href={ppl.name}
              style={{
                fontSize: 15,
                display: "block"
              }}
            >
              <i
                onClick={() => this.props.onDelete(ppl.name)}
                className="glyphicon glyphicon-remove pull-right"
                style={{
                  color: "#FF0000",
                  fontSize: 12
                }}
              />{" "}
              {ppl.name}{" "}
            </a>{" "}
          </li>
        ))}{" "}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-3">
            <div className="panel panel-primary">
              <Pannel
                value={this.props.contact}
                model={[{ name: "name" }]}
                onSubmit={model => {
                  this.props.onSubmit(model);
                }}
              />
              {this.listPeople()}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default sidebar;
