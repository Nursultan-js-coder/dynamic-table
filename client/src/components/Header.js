import {Header as ArwesHeader, Logo, withStyles, Words,} from "arwes";
import Centered from "./Centered";

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        lineHeight: "80px",
    },
    logo: {
        display: "inherit",
        marginTop: "15px",
    },
    nav: {
        display: "inherit",
    },
    banner: {
        display: "inherit",
        fontWeight: "bold",
        marginLeft: "10px",
        marginRight: "15px",
        fontSize: 28,
    },
    clickable: {
        fontSize: 21,
        "& i": {
            marginRight: theme.padding / 2,
            fontSize: 24,
        },
    },
    link: {
        color: theme.color.content,
        textDecoration: "none",
    },
    button: {
        padding: [0, theme.padding / 2],
    },
    "@media (max-width: 800px)": {
        logo: {
            display: "none",
        },
        img: {
            display: "none",
        },
        banner: {
            display: "none",
        },
        button: {
            padding: [0, 8],
        },
        clickable: {
            fontSize: 16,
        }
    },
});

const Header = props => {
    const {classes, onNav, ...rest} = props;
    return <ArwesHeader animate>
        <Centered className={classes.root} {...rest}>
            <img src="/favicon.png" alt="" className={classes.img} style={{
                margin: "15px 10px 15px 0",
                height: "50px",
                width: "auto",
            }}/>
            <Logo animate size={50} className={classes.logo} layer="header"/>
            <Words animate className={classes.banner}>
                Sci-Fi JSON parser
            </Words>
        </Centered>
    </ArwesHeader>
};

export default withStyles(styles)(Header);
