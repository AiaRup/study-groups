import styled from 'styled-components';

interface IContainerProps {
  isDraggingOver?: boolean;
}

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
export const Title = styled.h3`
  padding: 8px;
`;
export const StudentsList = styled.div<IContainerProps>`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;
