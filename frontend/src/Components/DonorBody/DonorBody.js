import React, { Component } from 'react';
import { connect } from 'react-redux';
import DonorCard from '../DonorCard/DonorCard';
import SampleCard from '../DonorCard/SampleCard';
import * as S from './DonorBodyStyles';

class DonorBody extends Component {
  render() {
    return (
      <S.Body>
        {/* 'Sort by' and 'search' input fields  */}
        <S.TopRow>
          <S.InputLabel>
            Order By:
            <S.OrderByInput type="select">
              <option value="recent">Recent</option>
              <option value="amount">Amount</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
            </S.OrderByInput>
          </S.InputLabel>
          <S.SearchInput type="text" placeholder="Search..." />
        </S.TopRow>
        {/* Grid area of all donor cards */}
        <S.DonorBody>
          <SampleCard />
          {this.props.donors.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </S.DonorBody>
      </S.Body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    donors: state,
  };
};

export default connect(mapStateToProps)(DonorBody);
