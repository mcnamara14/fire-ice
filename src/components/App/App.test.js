import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import * as mockData from '../../mockData/index';
jest.mock('../../cleaners/cleanHouseData');
jest.mock('../../apiCalls/index');
 
describe('App', () => {
  it('should match the snapshot', () => {
    const mockHouseData = mockData.mockCleanHouseData;
    const wrapper = shallow(<App houseData={mockHouseData} storeHouseData={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an array of house data', () => {
      const mockState = {
        houseData: mockData.mockCleanHouseData,
        weapons: ['sword']
      };

      const expected = {
        houseData: mockData.mockCleanHouseData
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});