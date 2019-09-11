import styled from 'styled-components';

interface IContainerProps {
  isDragging?: boolean;
}

export const Container = styled.div<IContainerProps>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;
