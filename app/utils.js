

export const convertCampus = (campus) => {
  campus.imageUrl = `/api/campuss/${campus.id}/image`;

  return campus;
};

export const convertCampuses = (campuses) =>
  campuses.map(campus => convertCampus(campus));