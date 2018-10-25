import { connect } from 'react-redux'
import TodoListComponent from '@/components/todo/list/List'

const mapStateToProps = state => ({
  todoList: state.ToDo
})

const TodoListContainer = connect(mapStateToProps)(TodoListComponent)

export default TodoListContainer