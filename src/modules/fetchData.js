const fetchData = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');
  const data = await response.json();
  return data.meals;
};
export default fetchData;