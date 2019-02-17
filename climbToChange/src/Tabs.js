import React from "react";
import QAndA from "./QAndA";

import { createBottomTabNavigator } from "react-navigation";
const Tabs = createBottomTabNavigator({
  qAndA: { screen: QAndA },
  profile: { screen: QAndA }
  // AddClimberName: {screen: AddClimberName }
});

export default Tabs;
