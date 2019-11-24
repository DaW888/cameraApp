import {createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./screens/Main";
import Gallery from "./screens/Gallery";
import CameraView from "./screens/CameraView";
import DisplayPhoto from "./screens/DisplayPhoto";

const Root = createStackNavigator({
  Main: { screen: Main },
  Gallery: {screen: Gallery},
  Camera: {screen: CameraView},
  DisplayPhoto: {screen: DisplayPhoto}
});

const App = createAppContainer(Root);

export default App;
