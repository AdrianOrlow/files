![Website](https://img.shields.io/website?url=https%3A%2F%2Ffiles.orlow.me)
![GitHub](https://img.shields.io/github/license/AdrianOrlow/files)
![David](https://img.shields.io/david/AdrianOrlow/files)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

# Files

My personal file sharing service frontend. Made with React, Styled Components and a little bit of Ramda.

[Files API](https://github.com/AdrianOrlow/files-api)

![thumbnail](https://user-images.githubusercontent.com/10941338/71479248-d0b0b800-27f3-11ea-96dd-2c98a82453d2.png)

## Getting started

Get all the dependencies loaded via

```
yarn install
```

And run the server with

```
yarn start
```

## Deployment (Dokku)

Build an app to production with

```
yarn run build
```

Add Dokku remote repository

```
git remote add dokku dokku@server_ip:app_name
```

and deploy it

```
git push dokku master
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
