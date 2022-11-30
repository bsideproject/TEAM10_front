import { KakaoAddress } from 'dtos/kakao';
type SplitType = 'dash' | 'dot';
const DATE_ONE_DAY = 86400000;

export const convertDate = (date: Date, type: SplitType): string => {
  const splitDate = date.toLocaleDateString().split('.');
  if (type === 'dash') {
    return `${splitDate[0]}-${splitDate[1].slice(1)}-${splitDate[2].slice(1)}`;
  }
  return `${splitDate[0]}.${splitDate[1]}.${splitDate[2]} `;
};

export const initFromDate = convertDate(new Date(), 'dash');

export const initToDate = convertDate(
  new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
  'dash',
);

export const diffDay = (from: string, to: string) => {
  const getFrom = new Date(from).getTime();
  const getTo = new Date(to).getTime();
  return Math.ceil((getTo - getFrom) / DATE_ONE_DAY + 1);
};

export const convertGetDay = (day: number) => {
  if (day === -1) {
    return '토';
  }
  const map = new Map()
    .set(0, '일')
    .set(1, '월')
    .set(2, '화')
    .set(3, '수')
    .set(4, '목')
    .set(5, '금')
    .set(6, '토');
  return map.get(day);
};

export const convertPickDay = (date: string, pickedDay: number) => {
  const getTime = new Date(date).getTime();
  const addNumDay = DATE_ONE_DAY * (pickedDay - 1);
  const calDate = new Date(getTime + addNumDay);
  return `${calDate.getMonth() + 1}.${calDate.getDate()}(${convertGetDay(
    calDate.getDay(),
  )})`;
};

export const convertTripDetails = (data: KakaoAddress[][]) => {
  const convertData = data.map(arr =>
    arr.map(el => {
      return {
        latitude: el.y,
        longitude: el.x,
        description: '',
        name: el.place_name,
        address: el.road_address_name,
        address_detail: el.address_name,
      };
    }),
  );

  return convertData;
};

export const convertTripDate = (startDate: string, endDate: string) => {
  const start = startDate.replaceAll('-', '.');
  const end = endDate.slice(5).replace('-', '.');
  return `${start} - ${end}`;
};
// x = longtidue 경도
// y = latitude 위도
