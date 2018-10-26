import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDoItem from '@/components/todo/item/Item'
import { FlatList, View, StyleSheet, Image } from 'react-native'
import { Wrapper, TextInput, Text, Spinner, Animator } from '@/components/visual'

class List extends Component {
  static navigationOptions = {
    title: 'TODO List'
  }

  constructor (props) {
    super(props)

    this.todoInput = React.createRef()

    this.state = {
      name: '',
      currentItem: '',
      submit: false,
      list: []
    }
  }

  addTodo () {
    this.setState({
      list: [
        this.state.currentItem,
        ...this.state.list
      ]
    })

    this.state.currentItem = ''
  }

  isLast (index) {
    return index === (this.state.list.length - 1)
  }

  render () {
    const { todoList } = this.props
    const { submit } = this.state

    return (
      submit ?
        (
          <Wrapper style={styles.screenFinal}>
            <Text style={styles.listName}>{ this.state.name }</Text>
            <Image
              style={{ resizeMode: 'contain', width: 200, height: 130 }}
              source={require('@/assets/img/squirtle.gif')}
            />
            <TextInput
              style={{ width: 375, marginBottom: 30 }}
              placeholder="Adicione items a lista"
              ref={input => { this.todoInput = input }}
              onChangeText={(text) => this.setState({currentItem: text})}
              onSubmitEditing={() => this.addTodo()}
              value={this.state.currentItem}
              autoFocus={true}
              blurOnSubmit={false}
            />
              {
                this.state.list.length ?
                (
                  <View style={styles.todoItems}>
                    <FlatList
                      data={this.state.list.map(item => ({key: item}))}
                      renderItem={
                        ({ item, index }) => 
                          <ToDoItem
                            text={item.key}
                            isLast={this.isLast(index)}
                          />
                      }
                    />
                  </View>
                ) :
                (
                  <Text>~o~</Text>
                )
              }
          </Wrapper>
        ) :
        (
          <Wrapper style={styles.screenInitial}>
            <TextInput
              style={{ borderWidth: 0 }}
              inputStyle={styles.listNameEdit}
              placeholder="Nome da lista"
              onChangeText={(text) => this.setState({name: text})}
              onSubmitEditing={() => this.setState({submit: true})}
            />
          </Wrapper>
        )
    )
  }
}

const styles = StyleSheet.create({
  listNameEdit: {
    textAlign: 'center',
    width: 300
  },
  screenInitial: {
    justifyContent: 'center'
  },
  screenFinal: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    flexWrap: 'nowrap'
  },
  listName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  todoItems: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    elevation: 1,
    maxHeight: 380
  }
})

List.propTypes = {
  todoList: PropTypes.array.isRequired
}

export default List