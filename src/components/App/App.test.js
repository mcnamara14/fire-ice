import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import * as mockData from '../../mockData/index';
jest.mock('../../cleaners/cleanHouseData');
jest.mock('../../apiCalls/index');
 
describe('App', () => {
  it('should match the snapshot', () => {
    const mockHouseData = mockData.mockHouseData;
    const wrapper = shallow(<App houseData={mockHouseData} storeHouseData={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })
});