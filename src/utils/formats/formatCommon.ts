import moment from 'moment';

export const formatDate = (date: Date | string, formatType = 'MMMM Do YYYY') => {
  return moment(new Date(date)).format(formatType);
};
