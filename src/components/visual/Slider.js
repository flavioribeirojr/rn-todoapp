import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

export default class Animation extends Component {
  constructor (props) {
    super(props)

    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    this.animatedValue.setValue(0)

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 800,
        easing: Easing.linear
      }
    ).start()
  }

  render () {
    const left = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 0.7, 0.9, 1],
      outputRange: [200, 100, -70, -20, 0]
    })

    return (
      <Animated.View
        style={{
          left
        }}
      >
        { this.props.children }
      </Animated.View>
    )
  }
}