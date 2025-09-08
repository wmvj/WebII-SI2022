export function extractQueryParams(query) {
  return query
    .slice(1) // retira a ? da rota
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}

// ?status=closed