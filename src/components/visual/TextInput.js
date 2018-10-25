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
    // width: 300,
    paddingHorizontal: 2,
    borderRadius: 2,
    borderWidth: 0.6,
    borderColor: '#40739e'
  }
})

MyTextInput.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  ...TextInput.propTypes,
  ...View.propTypes
}

export default MyTextInput