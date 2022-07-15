import {Appear, Button, Loading, Paragraph} from "arwes";
import Clickable from "./Clickable";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import {useState} from "react";

const Form = props => {

    const {addTodo} = props;
    const [todo, setTodo] = useState('');
    const onAddTodo = (e) => {
        e.preventDefault();
        addTodo({
            body: todo,
            user: {
                username: "Nurs",
                email: "nurstunguch@gmail.com"
            }
        });
        setTodo('')
    }

    return <Appear id="launch" animate show={props.entered}>
        <Paragraph>Enter todo to be completed today.</Paragraph>
        <form onSubmit={onAddTodo}
              style={{display: "inline-grid", gridTemplateColumns: "1fr 3fr", gridGap: "10px 20px", width: '100%'}}>
            <label htmlFor="mission-name">Todo body</label>
            <input value={todo}
                   onChange={(e) => setTodo(e.target.value)}
                   type="text" id="mission-name"
                   name="mission-name" style={{width: '100%'}}/>
            <Clickable>
                <Button animate
                        show={props.entered}
                        type="submit"
                        layer="success"
                        disabled={props.isPendingLaunch}>
                    Launch Todo ✔
                </Button>
            </Clickable>
            {props.isPendingLaunch &&
            <Loading animate small/>
            }
        </form>
    </Appear>
};

export default connect(
    null,
    {addTodo}
)(Form);
