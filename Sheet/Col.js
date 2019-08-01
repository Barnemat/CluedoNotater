import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Col extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'empty'
    };

    this.toggleIcon = this.toggleIcon.bind(this);
  }

  toggleIcon() {
    return null;
  }

  render() {
    const { empty, main, heading, bold } = this.props;

    return (
      <View style={[!empty && !main && styles.white, heading != '' || main ? styles.itemCol : styles.col, styles.margin]}>
        {heading ? 
          <Text style={[bold && styles.bold, styles.text]}>{heading}</Text>
        :
          <Icon name="remove" size={20} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
    alignSelf: 'stretch'
  },
  itemCol: {
    flex: 2,
    alignSelf: 'stretch'
  },
  bold : {
    fontWeight: 'bold'
  },
  text: {
    color: '#6696ce'
  },
  margin: {
    marginTop: 1,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 1
  },
  white: {
    backgroundColor: 'white'
  }
});
