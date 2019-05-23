export const fetchComments = (page) => {
  return new Promise(resolve => setTimeout(() => resolve([
    {id: 1, text: `comment ${(page - 1) * 2 + 1}`},
    {id: 2, text: `comment ${(page - 1) * 2 + 2}`},
  ]), page * 1000));
}
