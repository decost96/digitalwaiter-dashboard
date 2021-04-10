import {fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'

import React, { useEffect, useState } from "react";

const useStyle = makeStyles(theme =>({
    cardText:{
        width: "280px",
        margin: theme.spacing(0,1,1,2),
        paddingBottom: theme.spacing(4)
    },

    input:{
        margin: theme.spacing(1),
    },

    confirm:{
        margin: theme.spacing(1),
    },

    btnConfirm:{
        background: "#5aac44",
        color: "#fff",
        "&:hover": {
            background: fade("#5aac44", 0.75)
        }
    },

    options:{
        flexGrow: 1
    }   
}))

const AddOrderOrBoardText = () => {
    const clases = useStyle();
    const [title, setTitle] = useState("")
    return (
        <>
        <Paper className={clases.cardText}>
            <InputBase 
                multiline
                value={title} 
                onChange={e=>setTitle(e.target.value)}
                placeholder="Inserte texto para Titulo para este pedido..."
                inputProps = {{className: clases.input}}
            />
        </Paper>
        <div className={clases.confirm}>
            <div className={clases.options}>
            <button className={clases.btnConfirm}>Add</button>
            <IconButton>
            <clearIcon/>
            </IconButton>
            </div>
        </div>
        </>
    )
}

export default AddOrderOrBoardText;
