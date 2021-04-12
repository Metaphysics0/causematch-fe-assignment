import styled from 'styled-components';

export const Title = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
`;

// Form styles
export const DonorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 3rem;
`;
export const InputLabel = styled.label`
  font-weight: 600;
  text-shadow: 2px 3px 4px rgba(81, 67, 21, 0.8);
  color: #f4f4f4;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;
export const InputField = styled.input`
  font-size: 1.4rem;
  padding: 1.1rem 2rem;
  border-radius: 20px;
  outline: none;
  border: 2px solid #be8abf;
  transition: all 0.3s ease;
  &:focus,
  &:active {
    box-shadow: var(--box-shadow);
  }
`;
export const Textarea = styled.textarea`
  padding: 1rem;
  outline: none;
  resize: vertical;
  min-height: 5rem;
  border-radius: 10px;
  border: 2px solid #be8abf;
  width: 80%;
  font-family: inherit;
  transition: box-shadow 0.3s ease;
  &:focus,
  &:active {
    box-shadow: var(--box-shadow);
  }
`;
export const Button = styled.button`
  font-size: 1.5rem;
  display: inline-block;
  padding: 1rem;
  border-radius: 100px;
  width: 15rem;
  border: 3px solid #be8abf;
  text-transform: uppercase;
  background: #ffe268;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  margin: 0 auto;
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
  &:focus {
    transform: translateY(1px);
    box-shadow: none;
  }
`;
export const Row = styled.div`
  display: flex;
  @media only screen and (max-width: 55em) {
    flex-direction: column;
  }
  input {
    margin: 0 1rem;
  }
`;
