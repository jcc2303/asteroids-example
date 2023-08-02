import data from './data/api.json'


export const fetchData = async () => {
    if(true) {
      return data
    }


    try {
      // Fetch asteroid data from the backend API
      const response = await fetch(
        "http://localhost:8000/api/asteroids?start_date=2015-09-07&end_date=2015-09-08"
      );
      const data = await response.json();
      console.log(data);
      return data
  
      // Process the fetched asteroid data
    } catch (error) {
      console.error(error);
    }
  };
  
export default fetchData;