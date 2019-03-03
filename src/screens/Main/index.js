import React, { Component } from "react";
import { Container, SwiperContainer } from "./style";
import BottomNavigator from "../../components/BottomNavigator";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <SwiperContainer />
        <BottomNavigator />
      </Container>
    );
  }
}
