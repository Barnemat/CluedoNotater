import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Row from './Row.js';
import data from '../assets/items_no.json';

export default class Sheet extends React.Component {
  renderRows() {
    const categories = Object.keys(data);
    const elements = [<Row heading='' main />];

    categories.forEach((category) => {
      elements.push(<Row heading={category} bold noCols />);
      
      data[category].forEach((name) => {elements.push(<Row heading={name} />);});
    });

    return elements;
  }

  render() {
    return (
      <View style={ styles.sheet }>
        {this.renderRows()}
      </View>);
  }
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 560
  }
});
