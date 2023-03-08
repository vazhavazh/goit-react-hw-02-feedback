import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #555; /* серый фон кнопки */
  color: #fff; /* белый цвет текста */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* задержка при наведении на кнопку */
  border-radius: 10px;

  &:hover {
    background-color: #888; /* изменение фона кнопки при наведении */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
