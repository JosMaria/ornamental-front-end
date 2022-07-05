import axios from 'axios'

const DOMAIN = 'http://localhost:8080/';

const fetchAllPlants = async (state) => {
  const urlRequest = `${DOMAIN}api/v1/ornamental_plants`;
  const response = await axios.get(urlRequest);
  state(response.data);
};

const fetchClassifications = async (state) => {
  const urlRequest = `${DOMAIN}api/v1/classifications`;
  const response = await axios.get(urlRequest);
  const classifications = response.data

  const tabs = classifications.map(classification => {
    return {
      key: classifications.indexOf(classification) + 1,
      nameClassification: classification,
      isChecked: false
    }
  });
  state(tabs);
};

const fetchAllPlantsByClassifications = async (state, classification) => {
  const urlRequest = `${DOMAIN}api/v1/ornamental_plants/classifications/${classification}`
  const response = await axios.get(urlRequest);
  state(response.data);
}

export {
  fetchAllPlants,
  fetchClassifications,
  fetchAllPlantsByClassifications
}