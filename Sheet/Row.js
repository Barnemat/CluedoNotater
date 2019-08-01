import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Col from './Col.js';

const numCols = 8;

export default class Row extends React.Component {
  renderCols() {
    const cols = [];
    
    cols.push(<Col heading={this.props.heading} bold={this.props.bold} main={this.props.main} />)
    
    for (let i = 0; i < numCols - 1; i++) {
      cols.push(<Col heading='' empty={this.props.noCols} />);
    }

    return cols;
  }

  render() {
    return (
        <View style={ styles.row }>
          {this.renderCols()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  }
});
