import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    tabsRoot: {
        minHeight: "auto",
        display: "flex",
    },
    flexContainer: {
        flexWrap: "wrap",
    },
    indicator: {
        display: "none",
    },
    root: {
        color: "#ABABAB",
        border: "2px solid #F8F8F8",
        borderRadius: 6,
        marginRight: 10,
        padding: "6px 15px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 12,
        minHeight: "inherit",
        minWidth: "auto !important",
        lineHeight: "16px",
        marginBottom: 10,
        letterSpacing: 2,
        transition: "background-color 500ms",
    },
    selected: {
        backgroundColor: "#F8F8F8",
    },
}));

export default useStyles;