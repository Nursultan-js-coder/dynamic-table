import {useState,} from "react";
import {Route, Switch,} from "react-router-dom";
import {Frame, withSounds, withStyles,} from "arwes";

import usePlanets from "../hooks/usePlanets";
import useLaunches from "../hooks/useLaunches";

import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

    const onSuccessSound = () => sounds.success && sounds.success.play();
    const onAbortSound = () => sounds.abort && sounds.abort.play();
    const onFailureSound = () => sounds.warning && sounds.warning.play();

    const {
        launches,
        isPendingLaunch,
        submitLaunch,
        abortLaunch,
    } = useLaunches(onSuccessSound, onAbortSound, onFailureSound);

    const planets = usePlanets();

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
                                {/*<TodoList entered={anim.entered} todos={todos}/>*/}
                            </Route>

                            <Route exact path="/launch">
                                <Home entered={anim.entered}/>
                            </Route>
                            {/*<Route exact path="/upcoming">*/}
                            {/*    <Upcoming*/}
                            {/*        entered={anim.entered}*/}
                            {/*        launches={launches}*/}
                            {/*        abortLaunch={abortLaunch}/>*/}
                            {/*</Route>*/}
                            {/*<Route exact path="/history">*/}
                            {/*    <History entered={anim.entered} launches={launches}/>*/}
                            {/*</Route>*/}
                        </Switch>
                    </div>
                )}
            </Frame>
        </Centered>
        <Footer/>
    </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));
