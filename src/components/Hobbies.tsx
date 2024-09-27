import React from "react";
import { Menu } from "react-bulma-components";

const Hobbies: React.FC = () => (
  <React.Fragment>
    Hobbies
    <Menu.List>
      <Menu>
        <div className="menu-item">Electronics</div>
      </Menu>
      <Menu>
        <div className="menu-item">Autosolo racing</div>
      </Menu>
      <Menu>
        <div className="menu-item">Ancient History</div>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Hobbies;
