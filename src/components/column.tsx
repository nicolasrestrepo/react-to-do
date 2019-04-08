import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList: any = styled.div`
  padding: 8px;
`;

function Column({ column: { title, id }, tasks }: any) {
  return (
    <Container>
      <Title>{title}</Title>
      <Droppable droppableId={id}>
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task: any, index: number) => <Task key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}

export default Column


