type RecursiveDataTree = {
  preText: string;
  bodyText: string;
  postText: string;
  children: RecursiveDataTree[];
};

function textToTree(
  text: string,
  start = 0,
  end = text.length
): RecursiveDataTree {
  const stack: number[] = [];
  const preStart = start;
  let preEnd = start;
  let postStart = end;
  const postEnd = end;
  const children: RecursiveDataTree[] = [];

  for (let i = start; i < end; i++) {
    if (text[i] === '(') {
      if (preEnd === start) {
        preEnd = i;
      } else {
        stack.push(i);
      }
    } else if (text[i] === ')') {
      if (stack.length) {
        const childStart = stack.pop()! + 1;
        const childEnd = i;
        children.push(textToTree(text, childStart, childEnd));
      } else {
        postStart = i + 1;
      }
    }
  }

  return {
    preText: text.slice(preStart, preEnd),
    bodyText: text.slice(preEnd, postStart),
    postText: text.slice(postStart, postEnd),
    children,
  };
}

const input =
  'deals 10 - 40 (based on level) (+ 2 / 2.5 / 3 / 3.5 / 4% (+ 1.5% per 100 AP) of total health) magic damage';
const output = textToTree(input, 0, input.length);
console.log(input, output);
console.log('input (a) ww', textToTree('input (a) ww'));
