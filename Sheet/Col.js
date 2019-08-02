import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Col extends React.Component {
  constructor(props) {
    super(props);

    this.icons = ['plus', 'remove', 'question', 'check'];

    this.state = {
      icon: 0,
      text: '',
      locked: false
    };

    this.handleLongPress = this.handleLongPress.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  handleLongPress() {
    const { locked, icon } = this.state;
    if (icon === 0) return;

    this.setState({ locked: !locked, icon: locked ? 0 : icon });
  }

  toggleIcon() {
    const { icon, locked } = this.state;
    const { empty, name, main } = this.props;

    if (empty || name || main || locked) return;

    this.setState({ icon: icon < this.icons.length - 1 ? icon + 1 : 0 });
  }

  render() {
    const { empty, main, heading, bold, name } = this.props;
    const { icon, locked } = this.state;

    return (
      <View style={[!empty && !main && styles.white, heading != '' || main ? styles.itemCol : styles.col, styles.margin]}>
        {heading ? 
          <Text style={[bold && styles.bold, styles.text]}>{heading}</Text>
        : name ?
          <TextInput
            style={[styles.textField, styles.bold, styles.center]}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            autoCorrect={false}
            contextMenuHidden={true}
            allowFontScaling={false}
            maxLength={10}

          />
        :
          <TouchableOpacity onPress={this.toggleIcon} delayLongPress={100} onLongPress={this.handleLongPress}>
            <View style={ styles.center }>
              <Icon
                style={[(this.icons[icon] === 'plus' || empty || main) && { opacity: 0.0 }, locked && (icon === 3 ? { color: 'green' } : { color: 'red' })]}
                name={this.icons[icon]}
                size={20}
              />
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
    alignSelf: 'stretch',
    paddingLeft: 5
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
  },
  textField: {
    height: 30,
    width: 60,
    fontSize: 16,
    paddingTop: -10
  }
});
