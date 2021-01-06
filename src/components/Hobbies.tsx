import React from "react";
import { Menu } from "trunx";

const Hobbies: React.FC = () => (
  <React.Fragment>
    <Menu.Label>Hobbies</Menu.Label>
    <Menu.List>
      <Menu>
        <a>Electronics</a>
      </Menu>
      <Menu>
        <a>Grass Autotest racing</a>
      </Menu>
      <Menu>
        <a>Ancient History</a>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Hobbies;
