const fetchSingleData = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const { meals } = await response.json();
  return meals[0];
};
export default fetchSingleData;
