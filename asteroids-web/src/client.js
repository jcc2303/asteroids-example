

export const fetchData = async ({start='2015-09-07', end='2015-09-08'}) => {
    try {
      // Fetch asteroid data from the backend API
      const response = await fetch(
        `http://localhost:8000/api/asteroids?start_date=${start}&end_date=${end}`
      );
      const data = await response.json();
      if(data.message === 'Internal server error') throw new Error('error fetching, using fake data')
      return data
  
      // Process the fetched asteroid data
    } catch (error) {
      throw new Error('another error fetching, using fake data')
    }
};
  
export default fetchData;