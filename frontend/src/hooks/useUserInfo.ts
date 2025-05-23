import { useQuery } from '@tanstack/react-query';
import { checkMyInfo } from '../api/users/checkMyInfoAPI';

export const useUserInfo = () => {
  const query = useQuery({
    queryKey: ['useUserInfo'],
    queryFn: checkMyInfo,
  });

  return query;
};
