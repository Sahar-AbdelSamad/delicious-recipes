import countComments from './countComments.js';
import { postCommentAPI, getCommentsAPI } from './involvementAPI.js';

const createComment = async (e, btn) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const insight = document.getElementById('insight');
  const message = document.getElementById('message');
  const messageSuccess = document.getElementById('messageSuccess');
  const itemC = document.getElementById('itemC');
  const countC = document.getElementById('countC');

  name.addEventListener('focus', () => {
    message.textContent = '';
    messageSuccess.textContent = '';
  });

  insight.addEventListener('focus', () => {
    message.textContent = '';
    messageSuccess.textContent = '';
  });

  if (name.value === '') {
    message.textContent = 'Please enter your name';
    return;
  }
  if (insight.value === '') {
    message.textContent = 'Please enter an insight';
    return;
  }

  const body = {
    item_id: btn.id,
    username: name.value,
    comment: insight.value,
  };

  const postComment = await postCommentAPI(body);
  if (postComment === 'Created') {
    messageSuccess.textContent = 'Your comment was successfully Added';
  } else {
    messageSuccess.textContent = 'Something went wrong';
  }

  name.value = '';
  insight.value = '';

  const allComments = await getCommentsAPI(btn.id);

  countC.textContent = `(${countComments(allComments)})`;

  itemC.innerHTML = allComments
    .map((e) => {
      const { username, comment } = e;
      return `<span>${e.creation_date} ${username}: ${comment}</span><br />`;
    })
    .join('<br />');
};

export default createComment;
