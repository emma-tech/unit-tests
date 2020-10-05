//PASS 
export const hashtags = (text) => {
  let newText = text.split(' ');
  return newText.filter((item) => item.startsWith('#'));
}