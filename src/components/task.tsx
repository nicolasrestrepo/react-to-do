import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container: any = styled.div`
border: 1px solid lightblue;
border-radius: 8px;
padding: 8px;
background-color: ${ (props: any) => (props.isDragging ? 'blue' : 'white')};
`

function Task({ task: { content, id }, index }: any) {
  return (
    <Draggable draggableId={id} index={index} >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {content}
        </Container>
      )}
    </Draggable>
  )
}

export default Task
