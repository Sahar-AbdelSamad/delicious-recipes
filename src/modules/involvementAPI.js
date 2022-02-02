export const postAPI = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qKrE7Hh51FLB4aqMQk0N/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

export const getAPI = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qKrE7Hh51FLB4aqMQk0N/likes/');
  const data = await response.json();
  return data;
};