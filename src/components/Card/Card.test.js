import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import * as mockData from '../../mockData/index';
import { storeHouseData } from '../../actions/storeHouseData';
jest.mock('../../cleaners/cleanHouseData');
jest.mock('../../apiCalls/index');
 
describe('Card', () => {
  it('should match the snapshot', () => {
    const mockSeats = ['seat1'];
    const mockTitles = ['title1', 'title2'];
    const mockAncestralWeaopns = ['weapon1'];

    const wrapper = shallow(<Card seats={mockSeats} titles={mockTitles} ancestralWeapons={mockAncestralWeaopns} />);

    expect(wrapper).toMatchSnapshot();
  });
});