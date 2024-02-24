export const fetchReviews = async (selectedGroup) => {
  const fetchedReviews = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/review/${selectedGroup}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  const reviews = fetchedReviews.map((res) => {
    return {
      id: res._id,
      component: res.component,
      text: res.comment,
      groupId: res.modelGroupId.modelGroup,
      rating: res.rating,
      stakeholder: res.stakeholder,
      count: res.likes,
    };
  });
  return reviews;
};
