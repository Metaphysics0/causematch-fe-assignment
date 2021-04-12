import styled from 'styled-components';

export const Body = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 1rem;
`;
export const InputLabel = styled.label`
  color: grey;
  font-size: 1.45rem;
`;
export const OrderByInput = styled.select`
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 10px;
  border: 1px solid purple;
`;
export const TopRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 2rem;
`;

// Grid area
export const DonorBody = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 1.5rem;
`;
