import { useMemo } from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import {
    withStyles,
    Appear,
    Link,
    Paragraph,
    Table,
    Words,
} from "arwes";

import Clickable from "./Clickable";

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
    } = props;
    debugger;
    const tableBody = useMemo(() => {
        return todos
            .map((todo,index) => {
                return <tr key={String(todo.id)}>
                    <td>
                        <Clickable style={{color:"red"}}>
                            <Link className={classes.link} onClick={() => toggleTodo(todo)}>
                                ✖
                            </Link>
                        </Clickable>
                    </td>
                    <td>{index}</td>
                    <td>{todo.user.username}</td>
                    <td>{todo.user.email}</td>
                    <td>{todo.body}</td>
                </tr>;
            });
    }, [todos, toggleTodo, classes.link]);

    return <Appear id="todolist" animate show={entered}>
        <Table animate show={entered}>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>No.</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Todo</th>
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </table>
        </Table>
    </Appear>;
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};

export default connect(mapStateToProps)(withStyles(styles)(TodoList));
