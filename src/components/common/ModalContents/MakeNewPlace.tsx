import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddSchedule from 'components/ModalContents/AddSchedule';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import React, { useRef } from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import { useNavigate } from 'react-router-dom';
import { colors } from 'constants/colors';
import {
  setTitle,
  setDate,
  setDuration,
  setImg,
} from 'store/modules/placeInfo';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';

interface IProps {
  onClose: () => void;
}
const MakeNewPlace: React.FC<IProps> = ({ onClose }) => {
  const { TRIP } = CFG.MODAL_MYPLACE;
  const navigate = useNavigate();
  const dispatch = useAppDispatch;

  const handleClickBtn = () => {
    // ref를 걸어서 정보 가져오기
    // 정보 가져와서 리덕스툴킷 이용
    navigate('/make-my-trip');
  };

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText={TRIP.headerText} onClose={onClose} />
        <AddInput purpose="TRIP" />
        <AddSchedule isMake />
        <AddImgBtn />
        <ModalButton
          onClick={handleClickBtn}
          btnText="상세 일정 만들기"
          btnSize="large"
          btnWidth="100%"
          isOne
        />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 8px;
  padding: 32px 24px;
  gap: 20px;
  background-color: ${colors.WHITE};
`;

export default MakeNewPlace;