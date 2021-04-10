
import {makeStyles, Typography} from '@material-ui/core'

const useStyle = makeStyles(theme =>({
    Tittle:{
        display: "flex",
        margin: theme.spacing(1)
    },

    TittleText:{
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    }
}))

const BoardTitle = () => {
    const clases = useStyle();
    return (
        <div className={clases.Tittle}>
            <Typography className={clases.TittleText}>
                Ordenes Nuevas
            </Typography>
        </div>
    )
}

export default BoardTitle;