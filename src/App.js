import Board from './components/Board';
import './App.css';
import { makeStyles } from '@material-ui/core';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

const useStyle = makeStyles(theme =>({
  root:{
    display: "flex",
    OverflowY: "auto",
  },

  container:{
    display: "flex",
  }
}))

function App() {
  const clases = useStyle();

  const onDragend= (result)=>{
    const {destination, source, droppableId, type}= result
    console.table([
 
    ])
  }
  if(!destination){
    return;
  }

  if (type === "card"){
    const newCardId = data 
  }

  const sourceList = data.list[sourcedroppableId]
  const destinationLits = data.list[destdroppableId]
  const draggingCard = sourceList.cards.filter((card)=>card.id === draggableId)[0]

  if (sourcedroppableId === destdroppableId ){
    sourceLista.card.splice(sourceIndex, 1)
    destinationList.card.splice(destinationIndex, 0 ,draggingCard)

    setData({
      ...data,
      lists:{
        ...data.lists,
        [sourceList.id]: destinationList,
      }
    })
  } else{
    sourceList.cards.splice(sourceIndex, 1);
    destinationList.cards.splice(destIndex, 0 , draggingCard)
  }

  return (
    <DragDropContext onDragEnd={ ondragend}> 
    <Droppable droppableId="123" type="list" direction="horizontal">
    {
      (provided)=>(
      <div className={clases.container} ref={provided.innerRef} {...provided.droppableProps}>    
        <div className={clases.root}>
          <Board/>
          <Board/>
          <Board/>
        </div>
      </div>

      )
    }
    </Droppable>
    </DragDropContext>
  );
}

export default App;
