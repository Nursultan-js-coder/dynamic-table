import Form from "../components/Form";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";

const Home = props => {
    return (
        <>
            <div>
                <Form entered={props.entered}/>
            </div>
            <Filters entered={props.entered}/>

            <div style={{marginTop: 50}}>
                <TodoList entered={props.entered} toggleTodo={() => 0}/>
            </div>
        </>
    )
}


export default Home;
