// Donor card component
import React from 'react';
import * as S from './DonorCardStyles';

const DonorCard = (donor) => {
  return (
    <S.DonorCard>
      <S.TopSection>
        <S.Amount>{donor.donor.amount && '$' + donor.donor.amount}</S.Amount>
        <S.Donor>{donor.donor.donor && donor.donor.donor}</S.Donor>
      </S.TopSection>
      <S.BottomSection>
        <S.Message>{donor.donor.message && donor.donor.message}</S.Message>
      </S.BottomSection>
    </S.DonorCard>
  );
};

export default DonorCard;
