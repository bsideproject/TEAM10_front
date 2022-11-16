import Textarea from 'components/common/Textarea';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import * as CFG from 'services/config.js';

type Purpose = 'TAG' | 'TRIP';

interface IProps {
  purpose: Purpose;
}
const AddTextArea: React.FC<IProps> = ({ purpose }) => {
  const content = CFG.TEXTAREA_DESC[purpose];

  // const exampleText = '장소에 대한 생각, 간략한 설명을 입력해주세요.';
  return (
    <Wrap>
      <span>메모</span>
      <Textarea placeholder={content.placeholder} maxLength={500} count />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 432px;
  gap: 4px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;

  > span {
    color: ${colors.NEUTRAl_900};
    letter-spacing: 0.013em;
    ${fonts('text-sm-bold')};
  }
`;

export default AddTextArea;