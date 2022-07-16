import {Button} from "arwes";
import Clickable from "./Clickable";
import {connect} from "react-redux";
import {setFilter} from "../redux/actions";

const Filters = (props) => {
    const {setFilter} = props;
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: "space-between", marginTop: 20}}>
            <Clickable>
                <Button animate
                        show={props.entered}
                        type="submit"
                        layer="primary"
                        onClick={() => setFilter('all')}
                        disabled={props.isPendingLaunch}>
                    All
                </Button>
            </Clickable>
            <Clickable>
                <Button animate
                        show={props.entered}
                        type="submit"
                        layer="success"
                        onClick={() => setFilter('completed')}
                        disabled={props.isPendingLaunch}>
                    Completed
                </Button>
            </Clickable>
            <Clickable>
                <Button animate
                        show={props.entered}
                        type="submit"
                        layer="alert"
                        onClick={() => setFilter('not_completed')}
                        disabled={props.isPendingLaunch}>
                    Not completed
                </Button>
            </Clickable>
        </div>
    )

}


export default connect(null, {setFilter})(Filters);

