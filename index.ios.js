import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import PropComponents, { LotsOfGreetings } from './src/components/props';
import StateComponent from './src/components/state';
import LotsOfStyles from './src/components/style';
import FixedDimensionsBasics, {
  FlexDimensionsBasics2, FlexDimensionsBasics3,
  FlexDimensionsBasics4, FlexDimensionsBasics5
} from './src/components/FixedDimensions';
import PizzaTranslator from './src/components/textInput';
import ButtonBasics from './src/components/Touches';
import Touchables from './src/components/touchable';
import IScrolledDownAndWhatHappenedNextShockedMe from './src/components/scrollView';
import FlatListBasics, { SectionListBasics } from './src/components/flatList';
import Movies from './src/components/Networking'



//AppRegistry.registerComponent('Sample', () => PropComponents);
//AppRegistry.registerComponent('Sample', () => LotsOfGreetings);

export default class Test extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        {/* <PropComponents></PropComponents> */}
        {/* <LotsOfGreetings></LotsOfGreetings> */}
        {/* <StateComponent></StateComponent> */}
        {/* <LotsOfStyles></LotsOfStyles> */}
        {/* <FixedDimensionsBasics></FixedDimensionsBasics> */}
        {/* <FlexDimensionsBasics2></FlexDimensionsBasics2> */}
        {/* <FlexDimensionsBasics3></FlexDimensionsBasics3> */}
        {/* <FlexDimensionsBasics4></FlexDimensionsBasics4> */}
        {/* <FlexDimensionsBasics5></FlexDimensionsBasics5> */}
        {/* <PizzaTranslator></PizzaTranslator> */}
        {/* <ButtonBasics></ButtonBasics> */}
        {/* <Touchables></Touchables> */}
        {/* <IScrolledDownAndWhatHappenedNextShockedMe></IScrolledDownAndWhatHappenedNextShockedMe> */}
        {/* <FlatListBasics></FlatListBasics> */}
        {/* <SectionListBasics></SectionListBasics> */}
        <Movies></Movies>
      </View>
    );
  }
}
AppRegistry.registerComponent('Sample', () => Test);


