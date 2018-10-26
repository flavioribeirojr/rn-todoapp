import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Card extends Component {
  render () {
    const { children } = this.props

    return (
      <View style={styles.card}>
        { children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    width: 300,
    backgroundColor: 'white',
    elevation: 4
  }
})