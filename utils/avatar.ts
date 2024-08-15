export const getInitials = (name: string) => {
  if (!name) {
    return '';
  }

  const nameParts = name.split(' ');
  const firstInitial = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : '';
  const secondInitial = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : '';

  return firstInitial + secondInitial;
};
