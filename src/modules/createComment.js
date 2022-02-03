import { postCommentAPI } from './involvementAPI.js';

const createComment = async (e, id) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const insight = document.getElementById('insight');
  const message = document.getElementById('message');

  if (name.value === '') {
    message.textContent = 'Please enter your name';
    return;
  }
  if (insight.value === '') {
    message.textContent = 'Please enter an insight';
    return;
  }

  const body = {
    item_id: id,
    username: name.value,
    comment: insight.value,
  };

  const postComment = await postCommentAPI(body);
  if (postComment === 'Created') {
    message.textContent = 'Your comment was successfull Added';
  } else {
    message.textContent = 'Something went wrong';
  }

  name.value = '';
  insight.value = '';
};

export default createComment;
