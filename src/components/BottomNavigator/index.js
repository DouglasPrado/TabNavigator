import React from "react";
import { MenuItems } from "./data";
import { Container, Bottom, TitleBottom, ScrollNavigator } from "./style";

renderItems = ({ name, icon }, index) => (
  <Bottom key={index}>
    <TitleBottom>{name}</TitleBottom>
  </Bottom>
);
const BottomNavigator = () => (
  <Container>
    <ScrollNavigator horizontal showsHorizontalScrollIndicator={false}>
      {MenuItems.map(this.renderItems)}
    </ScrollNavigator>
  </Container>
);

export default BottomNavigator;
