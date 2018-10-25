import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: '#373a3c'
  }
})

export default class MyText extends Component {
  render () {
    return (
      <Text
        {...this.props}
        style={{...styles.text, ...(this.props.style || {})}}
      >
        { this.props.children }
      </Text>
    )
  }
}