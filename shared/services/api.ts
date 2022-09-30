import axios from "axios";
import { CONFIG } from "../config/config";

export const api = axios.create({
  baseURL: CONFIG.api.url
})