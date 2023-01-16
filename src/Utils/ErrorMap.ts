export default function errorMap(message: string) {
  switch (message) {
    case 'Car not found':
      return { type: 404, message };
    case 'Invalid mongo id':
      return { type: 422, message };
    default:
      return { type: 500, message: 'error' };
  }
}
module.exports = {
  errorMap,
};