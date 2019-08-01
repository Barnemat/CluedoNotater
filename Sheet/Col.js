import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Col extends React.Component {
  constructor(props) {
    super(props);

    this.icons = ['plus', 'remove', 'minus', 'check'];

    this.state = {
      icon: 0
    };

    this.toggleIcon = this.toggleIcon.bind(this);
  }

  toggleIcon() {
    const { icon } = this.state;
    console.log(icon);
    this.setState({ icon: icon < this.icons.length - 1 ? icon + 1 : 0 });
  }

  render() {
    const { empty, main, heading, bold } = this.props;
    const { icon } = this.state;

    return (
      <View style={[!empty && !main && styles.white, heading != '' || main ? styles.itemCol : styles.col, styles.margin]}>
        {heading ? 
          <Text style={[bold && styles.bold, styles.text]}>{heading}</Text>
        :
          <TouchableOpacity onPress={this.toggleIcon}>
            <View style={ styles.center }>
              <Icon style={this.icons[icon] === 'plus' && { opacity: 0.0 }} name={this.icons[icon]} size={20} />
            </View>
          </TouchableOpacity>}
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
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
