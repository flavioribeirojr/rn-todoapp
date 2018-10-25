import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const renderIcon = (icon) => icon ? <Icon size={18} name={icon} /> : null

const styles = StyleSheet.create({
  default: {
    padding: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
})

export default class Button extends Component {
  render () {
    const { props } = this

    return (
      <TouchableOpacity
        {...props}
        style={styles.default}
      >
        <Text style={styles.buttonText}>
          {renderIcon(props.icon || false)} { props.children }
        </Text>
      </TouchableOpacity>
    )
  }
}