import http from "../http-common";
class CRUDService {
  getUsers() {
    return http.get("/users");
  }
  create(data) {
    return http.post("/create", data);
  }
}
export default new CRUDService();
