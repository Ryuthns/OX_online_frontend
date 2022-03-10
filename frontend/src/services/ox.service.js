import http from "../http-common";

class oxService  {
    getAll() {
        return http.get("/ox");
    }

    get(id) {
        return http.get(`/ox/${id}`);
    }

    create(data) {
        return http.post("/ox", data);
    }
    deleteAll() {
        return http.delete("/ox");
    }
    authenUser(data){
        return http.post("/ox/login",data);
    }
 /*   update(id,data) {
        return http.put(`/todo/${id}`, data);
    }

    delete(id) {
        return http.delete(`/todo/${id}`);
    }

    deleteAll() {
        return http.delete(`/todo`);
    }

    findByTitle(title) {
        return http.get(`/todo?title=${title}`);
    }*/
}

export default new oxService ();
