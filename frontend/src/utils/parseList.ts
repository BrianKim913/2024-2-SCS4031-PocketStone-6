export const addElementAtList = (element: any, list: any[]) => {
  return [...list, element];
};

export const deleteElementAtList = (element: any, list: any[]) => {
  if (!list.includes(element)) return list;
  return list.filter((data) => data !== element);
};

export const getMemberIdList = (list: { employeeId: number; position: string }[]) => {
  return list.map((data) => data.employeeId);
};

export const getMemberIdListFromRecommend = (data: RecommendData) => {
  return data.teams.map((team) => team.team_indices);
};
