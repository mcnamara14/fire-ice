import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as mockData from '../../mockData/index';
import { storeHouseData } from '../../actions/storeHouseData';
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

  // describe('mapDispatchToProps', () => {
  //   it('calls dispatch with an storeHouseData action when component is mounted', async () => {
  //     const mockHouseData = mockData.mockCleanHouseData;
  //     const wrapper = shallow(<App houseData={mockHouseData} storeHouseData={jest.fn()} />);

  //     const mockDispatch = jest.fn()
  //     const actionToDispatch = storeHouseData(mockData.mockCleanHouseData)

  //     await wrapper.instance().componentDidMount();

  //     const mappedProps = mapDispatchToProps(mockDispatch)

  //     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  //   });
  // });

});