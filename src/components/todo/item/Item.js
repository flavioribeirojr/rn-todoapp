import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, Button, FadeView, Slider } from '@/components/visual'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  itemName: {
    textAlign: 'left',
    fontSize: 16,
    width: 280
  },
  wrapper: {
    borderBottomWidth: 0.7,
    borderColor: '#d1ccc0',
    backgroundColor: '#192a56',
    justifyContent: 'space-between'
  },
  inner: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
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
        <Slider>
          <View style={styles.inner}>
            <Text style={styles.itemName}>{ text }</Text>
            <View>
              <Button
                icon="trash"
                type="danger"
                style={{ borderRadius: 40 }}
                textStyle={{ fontSize: 5}}
              />
            </View>
          </View>
        </Slider>
      </View>
    )
  }
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired
}