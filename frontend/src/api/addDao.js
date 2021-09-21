import axios from 'axios';

export const createNewDao = async (daoData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/dao', daoData, config);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getAllDaos = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`/api/dao`, config);
      return data;
    } catch (error) {
      console.log('error', error.message);
      return error.message;
    }
  };

export const getDaoById = async (daoId) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(`/api/dao/${daoId}`, config);
    return data;
  } catch (error) {
    console.log('error', error.message);
    return error.message;
  }
};
