import axios from "axios";

const fetchUserDetails = () => {
    const data = axios
      .get(`https://curse-twilight-work.glitch.me/api/resumeData`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return data;
  };
  
  export {fetchUserDetails}