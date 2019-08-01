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
    let key = 0;
    
    cols.push(<Col key={key++} heading={this.props.heading} bold={this.props.bold} main={this.props.main} />)
    
    for (let i = 0; i < numCols - 1; i++) {
      cols.push(<Col key={key++} heading='' empty={this.props.noCols} name={this.props.main} />);
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
