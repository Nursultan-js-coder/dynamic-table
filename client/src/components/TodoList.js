import {connect} from "react-redux";
import {getTodosBySort, getTodosByVisibilityFilter} from "../redux/selectors";
import {Appear, Table, withStyles,} from "arwes";
import {deleteTodo, setFilter, setSort, toggleTodo} from "../redux/actions";
import Clickable from "./Clickable";
import Link from "arwes/lib/Link";
import {useEffect, useState} from "react";
import Words from "arwes/lib/Words";

const styles = () => ({
    link: {
        color: "red",
        textDecoration: "none",
    },
});

const TodoList = props => {
    const {
        entered,
        todos,
        classes,
        toggleTodo,
        deleteTodo
    } = props;


    const onDeleteTodo = (todo) => {
        deleteTodo(todo.id);
    }

    const ontToggleTodo = (todo) => {
        toggleTodo(todo.id);
    }

    const tableBody = () => {
        return todos
            .map((todo, index) => {
                return <tr key={index} onDoubleClick={()=>ontToggleTodo(todo)}>
                    <td>{index}</td>
                    {Object.keys(todo).map((key, index) => <td><Words>{JSON.stringify(todo[key])}</Words></td>)}
                    <td>
                        <Clickable style={{color: "red"}}>
                            <Link className={classes.link} onClick={() => onDeleteTodo(todo)}>
                                ✖
                            </Link>
                        </Clickable>
                    </td>
                </tr>;
            });
    }

    return <Appear id="todolist" animate show={entered}>
        <p>click on column header to sort the table</p>
        <Table animate show={entered}>
            <table>
                <thead>
                <tr>
                    <th>No.</th>
                    {todos.length && Object.keys(todos[0]).map((key, index) => <td
                        onClick={() => props.setSort({field: key})}>{key.toUpperCase()}</td>)}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {tableBody()}
                </tbody>
            </table>
        </Table>
    </Appear>;
}

const mapStateToProps = state => {
    const {visibilityFilter, visibilitySort} = state;
    const filteredTodos = getTodosByVisibilityFilter(state, visibilityFilter);
    const todos = getTodosBySort(filteredTodos, visibilitySort)
    return {todos};
};

export default connect(mapStateToProps, {setFilter, setSort, deleteTodo, toggleTodo})(withStyles(styles)(TodoList));
