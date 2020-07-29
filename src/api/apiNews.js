export default {
  getTopNewsBrazil: async () => {
    const res = await fetch(
      "http://newsapi.org/v2/top-headlines?country=br&apiKey=9562d137b5d64895928b55052b075e4d"
    );
    const json = await res.json();
    return json;
  },
  getCategory: async (type) => {
    const res = await fetch(`http://newsapi.org/v2/everything?q=${type}&from=2020-07-29&sortBy=popularity&apiKey=9562d137b5d64895928b55052b075e4d`);
    const json = await res.json();
    return json;
  },
};
