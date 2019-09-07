import axios from "axios";
const request = axios.create({
  baseURL: "https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=mt09nks"
});

export const getVehicleDetailsByReg = async query => {
  const { data } = await request.get("/");
  console.log(data)
  return data;
};