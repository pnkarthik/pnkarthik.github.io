const getBadgeColor = (badgeName) => {
  let badgeColor = '';
  switch (badgeName) {
    case 'arxiv':
      badgeColor = "#6495ED";
      break;
    case 'paper':
    case 'draft':
    case 'notes':
      badgeColor = "#4F8C1C";
      break;
    case 'xplore':
      badgeColor = "#DE3163";
      break;
    case 'slides':
    case 'certificate':
    case 'thesis':
      badgeColor = "#e59866";
      break;
    case 'video':
      badgeColor = "#DDA0DD";
      break;
    case 'weblink':
      badgeColor = "#7C7C79";
      break;
    case 'abstract':
      badgeColor = "#E59866";
      break;
    case 'keynote':
      badgeColor = "#1F6712";
      break;  
    default :
      badgeColor = '';
  }
  return badgeColor;
};

export { getBadgeColor };