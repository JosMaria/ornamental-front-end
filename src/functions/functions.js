import axios from 'axios'

const DOMAIN = 'http://localhost:8080';

const fetchAllPlants = async (state) => {
  const urlRequest = `${DOMAIN}/api/v1/nursery/catalog`;
  const response = await axios.get(urlRequest);
  state(response.data);
  console.log(response.data);
};

export { fetchAllPlants }