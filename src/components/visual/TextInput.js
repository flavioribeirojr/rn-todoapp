import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, StyleSheet } from 'react-native'

class MyTextInput extends Component {
  render () {
    const { props } = this

    return (
      <View style={ {...styles.input, ...(props.style || {})} }>
        <TextInput {...props} style={{ ...(props.inputStyle || {}) }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 2,
    borderRadius: 2,
    elevation: 2
  }
})

MyTextInput.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  ...TextInput.propTypes,
  ...View.propTypes
}

export default MyTextInput