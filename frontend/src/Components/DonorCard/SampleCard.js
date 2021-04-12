// Donor card component
import React from 'react';
import * as S from './DonorCardStyles';

const SampleCard = () => {
  return (
    <S.DonorCard>
      <S.TopSection>
        <S.Amount>$36</S.Amount>
        <S.Donor>Baruch Cohen</S.Donor>
      </S.TopSection>
      <S.BottomSection>
        <S.Message>CauseMatch is the best!</S.Message>
      </S.BottomSection>
    </S.DonorCard>
  );
};

export default SampleCard;
