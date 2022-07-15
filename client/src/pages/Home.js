import Form from "../components/Form";
import TodoList from "../components/TodoList";

const Home = props => {
    return (
        <>
            <div>
            <Form entered={props.entered}/>
            </div>

            <div style={{marginTop:50}}>
            <TodoList entered={props.entered} toggleTodo={()=>0}/>
            </div>
        </>
    )
}


export default Home;
