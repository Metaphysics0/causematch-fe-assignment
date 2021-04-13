// Form input fields to add a new donor
import React, { Component } from 'react';
import * as S from './FormStyles';
import { connect } from 'react-redux';

class DonorForm extends Component {
  // Add form inputs to Redux state.
  handleSubmit = (e) => {
    e.preventDefault();
    const donor = this.getDonor.value;
    const amount = this.getAmount.value;
    const message = this.getMessage.value;
    const data = {
      id: Date.now(),
      donor,
      amount,
      message,
      editing: false,
    };
    this.props.dispatch({
      type: 'ADD_DONOR',
      data,
    });
    this.getDonor.value = '';
    this.getAmount.value = '';
    this.getMessage.value = '';
  };

  render() {
    return (
      <>
        <S.Title>Donation Center 💸</S.Title>
        <S.DonorForm onSubmit={this.handleSubmit}>
          <S.Row>
            <S.InputLabel>
              Donor:
              <S.InputField
                required
                type="text"
                placeholder="Ryan Roberts"
                defaultValue="Baruch Cohen"
                ref={(input) => (this.getDonor = input)}
              />
            </S.InputLabel>
            <S.InputLabel>
              Amount
              <S.InputField
                type="number"
                placeholder="$32"
                defaultValue="100"
                ref={(input) => (this.getAmount = input)}
              />
            </S.InputLabel>
          </S.Row>
          <S.InputLabel>
            Message: (Optional)
            <S.Textarea
              placeholder="Leave a note!"
              name="message"
              ref={(input) => (this.getMessage = input)}
            ></S.Textarea>
          </S.InputLabel>
          <S.Button type="submit">Submit!</S.Button>
        </S.DonorForm>
      </>
    );
  }
}

export default connect()(DonorForm);
