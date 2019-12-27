const Api = {
  Url: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'https://files-api.orlow.me/',
  LocalStorageTokenName: 'token',
};

export default Api;
