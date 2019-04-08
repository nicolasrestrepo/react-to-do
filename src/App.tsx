import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './components/column';



function App() {
  const [state, setState]: any = useState(initialData);

  const onDragEnd = (result: any) => {
    console.log('any', result)
    const { destination, source, draggableId } = result
    if (!destination) {
      return;
    }

    if (
      destination.dropplabeId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId]
    const newTasksIds = Array.from(column.taskIds)

    newTasksIds.splice(source.index, 1)
    newTasksIds.splice(destination.index, 0, draggableId)


    const newColumn = {
      ...column,
      taskIds: newTasksIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    }

    setState(newState)
  }

  const onDragStart = (result: any) => {
    // console.log('result', result)
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}>
      {state.columOrder.map((columnId: string) => {
        const column = state.columns[columnId]

        console.log('column', column)

        const tasks = column.taskIds.map((taskId: any) => state.task[taskId])

        console.log('tasks', tasks)

        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )

}

export default App;
