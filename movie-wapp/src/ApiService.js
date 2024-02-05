const SPRING_API_URL = "http://localhost:5000/api/v1/movies";

class ApiService {
  async getMovies() {
    try {
          const res = await fetch(SPRING_API_URL);
          return await res.json();
      } catch (error) {
          console.log(error); // Log any errors
      }
  }
}

export default new ApiService();
