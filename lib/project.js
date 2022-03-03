export function getProjectYear(project){
  const startYear = new Date(project.dates.start).getFullYear();
  const endYear = new Date(project.dates.end).getFullYear();
  if(startYear === endYear){
    return `${startYear}年`;
  }else{
    return `${startYear}～${endYear}年`;
  }
};

export function getProjectDuration(project){
  const startDate = new Date(project.dates.start);
  const endDate = new Date(project.dates.end);
  const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  const msPerDay = 86400000;
  // 終了日も期間に含めたいので+1日
  const days = Math.floor((endUTC - startUTC) / msPerDay) + 1;

  if(days >= 30){
    return `${Math.floor(days / 30)}か月`;
  }else{
    return `${days}日`;
  }
};
