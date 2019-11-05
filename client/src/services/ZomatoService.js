export default class ZomatoService {
  static xUrl = "";
  static yUrl = "";

  static async getCityId(cityName) {
    const fetchPromise = await fetch(this.xUrl + cityName);
    const apiData = await fetchPromise.json();
    return apiData;
  }

  static async getCityRestaurantsById(cityId) {
      const fetchPromise = fetch(this.yUrl + cityId);
      const apiData = await fetchPromise.json();
      return apiData;
  }

  static async getCityRestaurantsByName(cityName) {
    const cityId = this.getCityId(cityName);
    return await this.getCityRestaurantsById(cityId);
  }
}

// ZomatoService.getCityRestaurantsByName("Edinburgh")
//   .then(restaurants => {
//     // ...code...
//   });
