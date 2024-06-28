import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darken(${(props) => props.theme.colors.primary}, 10%);
  }
`;

export const Header = styled.h2`
  margin: 20px 0;
`;

export const Text = styled.p`
  margin: 10px 0;
`;
