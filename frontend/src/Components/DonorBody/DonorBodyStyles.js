import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

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
  margin: 0 1rem;
  padding: 0.75rem 1rem;
  outline: none;
  border-radius: 10px;
`;
export const InputWrap = styled.div`
  position: relative;
`;
export const SearchInput = styled.input`
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  outline: none;
  border-radius: 20px;
  border: 1px solid purple;
  transition: box-shadow 0.3s ease;
  &:focus {
    box-shadow: var(--box-shadow);
  }
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 1.25rem;
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
