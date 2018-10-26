import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const renderIcon = (icon) => icon ? <Icon size={18} name={icon} /> : null

const buttonColors = {
  primary: '#706fd3',
  success: '#33d9b2',
  info: '#34ace0',
  warning: '#ffb142',
  danger: '#ff5252'
}

const styles = StyleSheet.create({
  default: {
    padding: 10,
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
        style={{
          ...styles.default,
          backgroundColor: buttonColors[props.type] || buttonColors.primary,
          ...props.style
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            ...(props.textStyle || {})
          }}
        >
          {renderIcon(props.icon || false)} { props.children }
        </Text>
      </TouchableOpacity>
    )
  }
}