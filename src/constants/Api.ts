const Api = {
  Url: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : '/api/',
  LocalStorageTokenName: 'token',
};

export default Api;
