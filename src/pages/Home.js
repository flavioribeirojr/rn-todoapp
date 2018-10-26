import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Button, Wrapper } from '@/components/visual'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Wrapper style={{ justifyContent: 'space-between', paddingVertical: 160 }}>
        <Image
          style={styles.gengar}
          source={require('@/assets/img/gengar.gif')}
        />
        <Button
          onPress={() => navigate('ToDoList')}
          icon="plus"
        >
          Começar lista!
        </Button>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  gengar: {
    width: 200,
    height: 180,
    marginBottom: 20
  }
})

export default Home