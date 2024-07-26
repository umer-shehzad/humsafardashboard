import axios from "axios";
import { BACKEND_APIS } from "../../utils/constants";

export const APIs = axios.create({
  baseURL: BACKEND_APIS,
});
