import http from "@/http-common";
import type { AxiosResponse } from "axios";

class GameDataService {
  get(id: any): Promise<AxiosResponse<any>> {
    return http.get(`/${id}`)
  }
}

export default new GameDataService();
