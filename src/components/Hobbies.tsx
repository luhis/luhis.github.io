import React from "react";
import { Menu } from "rbx";

const Hobbies: React.FC = () => (
  <React.Fragment>
    <Menu.Label>Hobbies</Menu.Label>
    <Menu.List>
      <Menu.List.Item>
        <a>Electronics</a>
      </Menu.List.Item>
      <Menu.List.Item>
        <a>Grass Autotest racing</a>
      </Menu.List.Item>
      <Menu.List.Item>
        <a>Ancient History</a>
      </Menu.List.Item>
    </Menu.List>
  </React.Fragment>
);

export default Hobbies;
