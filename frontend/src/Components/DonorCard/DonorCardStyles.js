// Donor card styles
import styled from 'styled-components';

export const DonorCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: var(--box-shadow);
`;
export const TopSection = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: lightblue;
  border-radius: 10px 10px 0 0;
`;
export const Amount = styled.p`
  font-size: 2.25rem;
  font-weight: 500;
`;
export const Donor = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
`;
export const Message = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
export const BottomSection = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  min-height: 5rem;
`;
