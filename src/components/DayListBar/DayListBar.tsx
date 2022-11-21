import DayNumList from 'components/MyTrip/DayNumList';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import PickDateInfo from 'components/MyTrip/PickDateInfo';
import EmptyDnd from 'components/common/EmptyContent/EmptyDnd';
import TripSummary from 'components/MyTrip/TripSummary';
import DraggableItem, { Item } from 'components/TripDayGroup';
import { AddrT, DndType } from 'types/dtos/address';
interface IProps {
  daysData: AddrT[][];
  pickedDay: number;
  setPickedDay: React.Dispatch<React.SetStateAction<any>>;
  removeDaysData: (addr: AddrT, dayNum: number) => void;
}

const DayListBar: React.FC<IProps> = ({
  daysData,
  pickedDay,
  setPickedDay,
  removeDaysData,
}) => {
  const [addrData, setAddrData] = useState(daysData[pickedDay - 1]);

  useEffect(() => {
    setAddrData(daysData[pickedDay - 1]);
  }, [daysData, pickedDay]);

  const dummyFunc = (items: AddrT[]) => {
    setAddrData(items);
  };
  return (
    <Wrap>
      <TripSummary />
      <DayNumList setPickedDay={setPickedDay} />
      <PickDateInfo pickedDay={pickedDay} />
      <DraggableItem
        itemList={addrData}
        pickedDay={pickedDay}
        onChangeList={dummyFunc}
        removeDaysData={removeDaysData}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 20px;
  background-color: ${colors.NEUTRAl_50};
`;

export default DayListBar;

// {addrData.length === 0 && <EmptyDnd />}
// {addrData.length > 0 && (
//   <DraggableItem itemList={addrData} onChangeList={dummyFunc} />
// )}
