class Favourites {
  static url = "http://localhost:8080/api/favourites";

  static get() {
    return fetch(this.url)
      .then(res => res.json());
  }

  static post(id) {
    return fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id)
    }).then(res => res.json());
  }

  static delete(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

}

export default Favourites;
