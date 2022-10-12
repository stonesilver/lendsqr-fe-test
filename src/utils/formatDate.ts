export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = `${date
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ')} ${date.toLocaleTimeString().slice(0, 4)}${date
    .toLocaleTimeString()
    .slice(8)}`;

  return formattedDate;
};
