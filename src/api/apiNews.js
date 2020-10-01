export default {
  getTopNewsBrazil: async (searchT) => {

    if (searchT) {
      const res = await fetch(`http://newsapi.org/v2/everything?q=${searchT}&from=2020-07-29&sortBy=popularity&apiKey=9562d137b5d64895928b55052b075e4d`);
      return await res.json();
    } else {
      const res = await fetch(
        "http://newsapi.org/v2/top-headlines?country=br&apiKey=9562d137b5d64895928b55052b075e4d"
      );
      return await res.json();
    }
  },
  getCategory: async (type) => {
    const res = await fetch(`http://newsapi.org/v2/everything?q=${type}&from=2020-07-29&sortBy=popularity&apiKey=9562d137b5d64895928b55052b075e4d`);
    return await res.json();
  },
};
