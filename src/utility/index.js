const getBadgeColor = (index) => {
  let badgeColor = '';
  switch (index) {
    case 0:
      badgeColor = "rgb(17 121 78)";
      break;
    case 1:
      badgeColor = "rgb(44 83 231)";
      break;
    case 2:
      badgeColor = "rgb(170 118 36)";
      break;
    case 3:
      badgeColor = "rgb(130 21 158)";
      break;
  }
  return badgeColor;
}

export { getBadgeColor };