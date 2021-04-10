import { formatMs, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import BoardTitle from './BoardTitle'
import {Draggable} from 'react-beautiful-dnd'

const useStyle = makeStyles(theme =>({
    card:{
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(1)

    }
}))

const OrderCard = () => {
    const clases = useStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
            {
                (provided)=>(
                    <div ref={provided.innerRef}{...provided.dragHandleProps}{...provided.draggableProps}>
                    <Paper className={clases.card}>
                        Card
                    </Paper>
                </div>
                )
            }
        </Draggable>

    )
}

export default OrderCard;