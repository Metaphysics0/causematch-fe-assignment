import React, { Component } from 'react';
import { connect } from 'react-redux';
import DonorCard from '../DonorCard/DonorCard';
import * as S from './DonorBodyStyles';
import ReactTooltip from 'react-tooltip';

class DonorBody extends Component {
  render() {
    return (
      <S.Body>
        {/* 'Sort by' and 'search' input fields  */}
        <S.TopRow>
          <S.ToolTip style={{ visibility: 'hidden' }} />
          <S.InputLabel>
            Order By:
            <S.OrderByInput type="select">
              <option value="recent">Recent</option>
              <option value="amount">Amount</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
            </S.OrderByInput>
          </S.InputLabel>
          <S.InputWrap>
            <S.SearchInput type="text" placeholder="Search..." />
            <S.SearchIcon />
          </S.InputWrap>
          <p data-tip data-for="tooltip">
            <S.ToolTip />
          </p>
          <ReactTooltip id="tooltip" type="info" effect="solid">
            <span>
              Thank you for using our service! <br />
              Currently, the "Search", and "Order By" <br />
              features are in development! <br />
              Check back with us soon!
            </span>
          </ReactTooltip>
        </S.TopRow>
        {/* Grid area of all donor cards */}
        <S.DonorBody>
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
