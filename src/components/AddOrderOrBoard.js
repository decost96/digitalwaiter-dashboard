import {Collapse, fade, makeStyles, Paper, Typography} from '@material-ui/core'
import AddOrderOrBoardText from './AddOrderOrBoardText'
import React from 'react'
import { useEffect, useState } from "react";

const useStyle = makeStyles(theme =>({
    root:{
        width: "300px",
        marginTop: theme.spacing(1)
    },

    addOrderOrBoardText:{
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(0,1,1,1),
        background: "#ebecf0",
        "&:hover":{
            backgroundColor: fade("#000", 0.25)
        }
    }
}))

const AddOrderOrBoard = () => {
    const clases = useStyle();
    const [open, setOpen] = useState(true)
    return (
        <div className={clases.root}>
            <Collapse in ={open}>
            <AddOrderOrBoardText/>
            </Collapse>
            <Collapse in ={!open}>
            <Paper className={clases.addOrderOrBoardText}>
                <Typography>
                   + Añadir Orden Nueva
                </Typography>
            </Paper>
            </Collapse>
        </div>
    )
}

export default AddOrderOrBoard;