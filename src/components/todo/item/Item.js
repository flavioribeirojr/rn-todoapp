import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Text from '@/components/visual/Text'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  itemName: {
    textAlign: 'left',
    fontSize: 14
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 0.7,
    borderColor: '#40739e',
    justifyContent: 'space-between'
  }
})

export default class Item extends Component {
  render () {
    const { text, isLast } = this.props

    return (
      <View
        style={{
          ...styles.wrapper,
          ...(isLast ? { borderBottomWidth: 0 } : {})
        }}
      >
        <Text style={styles.itemName}>{ text }</Text>
        <View>
          <Text>O</Text>
        </View>
      </View>
    )
  }
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired
}