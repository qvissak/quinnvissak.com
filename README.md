# quinnvissak.com

My second attempt at a personal website.

[![Build Status](https://travis-ci.org/qvissak/quinnvissak.com.svg?branch=master)](https://travis-ci.org/qvissak/quinnvissak.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)

## Technology Stack

Before working on this project, you should be familiar with the following protocols, projects and technologies:

- [ESLint](https://eslint.org/)
- [Directus](https://docs.directus.io/getting-started/introduction.html#what-is-directus)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/doc/)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)

## Set Up

### Software Prerequisites

[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04) has great tutorials and might help with installing the required technologies. Please have the following installed on your machine:

- [Docker](https://docs.docker.com/docker-for-mac/install/)
- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)
- [Python3](https://www.python.org/downloads/)

```bash
pip3 install requests
```

### Initial Directus Configuration

Follow the set up guide [here](https://docs.directus.io/installation/docker.html).

### Launch Project

```bash
docker-compose up -d
cat directussqldump.sql | docker exec -i quinnvissakcom_mysql_1 mysql -u directus -pdirectus directus
```

Navigate to [login page](http://localhost:8080/admin/#/login) in your browser to see the CMS. Log in with `email@example.com` and `d1r3ctu5`.

## Deployment

```bash
npm predeploy
npm deploy
```

## Database

### Backup MySQL

```bash
docker exec -it quinnvissakcom_mysql_1 mysqldump -u directus -pdirectus directus > directussqldump.sql
```
