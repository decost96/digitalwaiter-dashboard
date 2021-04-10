import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react'
import OrderCard from './OrderCard';
import BoardTitle from './BoardTitle';
import AddOrderOrBoard from './AddOrderOrBoard';

const useStyle = makeStyles(theme =>({
    Paper:{
        width: "250px",
        background: "#ebecf0",
        margin: theme.spacing(1)
    }
}))

const Board = () => {
    const clases = useStyle();
    return (
        <Paper className={clases.Paper}>
            <CssBaseline/>
            <BoardTitle/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <AddOrderOrBoard/>
        </Paper>
    )
}

export default Board;