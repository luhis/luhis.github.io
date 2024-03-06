import React from "react";
import { Menu } from "react-bulma-components";

const Hobbies: React.FC = () => (
  <React.Fragment>
    Hobbies
    <Menu.List>
      <Menu>
        <div className="px-3 py-2">Electronics</div>
      </Menu>
      <Menu>
        <div className="px-3 py-2">Grass Autotest racing</div>
      </Menu>
      <Menu>
        <div className="px-3 py-2">Ancient History</div>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Hobbies;
