import {Appear, Loading, Words} from "arwes";
import {connect} from "react-redux";
import {addTodo, loadTodos} from "../redux/actions";

const Form = props => {
    const {loadTodos} = props;

    const showFile = async (event) => {
        event.preventDefault()
        const reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event) {
        const todos = JSON.parse(event.target.result);
        loadTodos(todos);
    }

    return <Appear id="launch" animate show={props.entered}>
        <Words>Select file that i've attached to this app or file with json format like that.</Words>
        <form onSubmit={showFile}
              style={{display: "inline-grid", gridTemplateColumns: "1fr 3fr", gridGap: "10px 20px", width: '100%'}}>
            <label htmlFor="mission-name">select file</label>
            <input type="file" onChange={(e) => showFile(e)}/>
            {props.isPendingLaunch &&
            <Loading animate small/>
            }
        </form>
    </Appear>
};

export default connect(
    null,
    {addTodo, loadTodos}
)(Form);
