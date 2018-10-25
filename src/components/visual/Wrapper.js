import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  }
})

export default class Wrapper extends Component {
  render () {
    const { children, style } = this.props

    return (
      <View style={{...styles.container, ...(style || {})}}>
        { children }
      </View>
    )
  }
}