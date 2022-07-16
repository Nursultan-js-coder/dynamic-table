import {useState,} from "react";
import {Route, Switch,} from "react-router-dom";
import {Frame, withSounds, withStyles,} from "arwes";
import Centered from "../components/Centered";
import Header from "../components/Header";
import Home from "./Home";

const styles = () => ({
    content: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: "auto",
    },
    centered: {
        flex: 1,
        paddingTop: "20px",
        paddingBottom: "10px",
    },
});

const AppLayout = props => {
    const {sounds, classes} = props;

    const [frameVisible, setFrameVisible] = useState(true);
    const animateFrame = () => {
        setFrameVisible(false);
        setTimeout(() => {
            setFrameVisible(true);
        }, 600);
    };


    return <div className={classes.content}>
        <Header onNav={animateFrame}/>
        <Centered className={classes.centered}>
            <Frame animate
                   show={frameVisible}
                   corners={4}
                   style={{visibility: frameVisible ? "visible" : "hidden"}}>
                {anim => (
                    <div style={{padding: "20px"}}>
                        <Switch>
                            <Route exact path="/">
                                <Home entered={anim.entered}/>
                            </Route>

                            <Route exact path="/launch">
                                <Home entered={anim.entered}/>
                            </Route>
                        </Switch>
                    </div>
                )}
            </Frame>
        </Centered>
    </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));
