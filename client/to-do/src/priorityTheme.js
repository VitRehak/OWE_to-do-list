export default function priorityTheme(priority) {
  switch (Number(priority)) {
    case 1:
    case 2:
      return "badge bg-success";
    case 3:
      return "badge bg-warning text-dark";
    case 4:
    case 5:
      return "badge bg-danger";
    default:
      return "badge bg-warning text-dark";
  }
}
