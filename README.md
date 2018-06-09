# quinnvissak.com
My second attempt at a personal website.

## Technology Stack
Don't worry, knowledge of php is not required for this project. It's just how the headless-CMS is set up, but it can be edited with absolutely no coding! Before working on this project, you should be familiar with the following protocols, projects and technologies:
- [ESLint](https://eslint.org/)
- [Directus](https://docs.getdirectus.com/6.4.0/#What_is_Directus?)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/doc/)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [SSH Encryption](https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process/)

## Set Up
Project set up shown for MacOS. Please contact the lead developer or update the documentation if set up varies by machine.

### Software Prerequisites
[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04) has great tutorials and might help with installing the required technologies. Please have the following installed on your machine:
- [Brew](https://brew.sh/)
- [Composer](https://getcomposer.org/download/)
- [Git](https://git-scm.com/downloads)
- [MySQL](https://www.mysql.com/downloads/)
- [Nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
- [Node](https://nodejs.org/en/download/)
- [Php](http://php.net/manual/en/install.php)
```sh
brew install composer
brew install git
brew install mysql
brew install mysql-server
brew install nginx
brew install node
brew install php72
```

### Add SSH Key to your GitHub Account
Before trying to clone the repository, ensure you have a [public/private key pair generated](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac) on your machine and [added to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/).

### Clone the Repository
```sh
git clone git@github.com:qvissak/quinnvissak.com.git
```

### Install Dependencies
```sh
cd quinnvissak.com/
npm install
```

### Create a database locally:
If you are having difficulties logging in, look up a [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql) tutorial! You'll use this database name later.
```sh
mysql -u $USER -p
create database quinnvissak;
quit;
```

### Seed initial data and assets:
Get an initial dump of Quinn's database `quinnvissak.sql`.
Download image assets and place in `quinnvissak.com/cms/storage/`.
```sh
sed -i '' 's/DEFINER=`.*`@`localhost`/DEFINER=`$USER`@`localhost`/g' quinnvissak.sql
mysql -u $USER -p --database=quinnvissak < quinnvissak.sql
git checkout -- quinnvissak.sql
```

### Set up Nginx
Copy the `default` file from the [Directus respository](https://github.com/directus/directus-vagrant/tree/master/config/nginx) into the file `directus.conf`. See file path below.
Change the line `root /var/www/html;` to `root /Users/$USER/quinnvissak.com/cms`, where $USER is the name of your machine. Remove the line `include pagespeed.conf;` from the file.
Change the line `server_name localhost;` to `server_name quinnvissak.test;` since you'll probably be using localhost for something else.
Change the line `fastcgi_pass unix:/var/run/php5-fpm.sock;` to `fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;` or with whichever version of php you are using and the appropriate file path.
```sh
sudo vim /usr/local/etc/nginx/servers/directus.conf
```
Update your hosts file to include your recent addition. Add the line `127.0.0.1 quinnvissak.test`.
```sh
sudo vim /etc/hosts
```
Give nginx/php the ability to write to this folder. Change owner of repository to your user.
```sh
chmod -R 775 ~/quinnvissak.com/cms/
sudo chown -R $USER:www-data ~/quinnvissak.com
```

### Ensure proper services running
Make sure after your installation and configuration, nginx, mysql, and php are all running. Make sure they are all running as $USER and not root. Stop and start the service if not highlighted green.
```sh
brew services list
```

### Install CMS dependencies
```sh
cd cms/
composer install
```

### Launch Project
Navigate to quinnvissak.com:8080/login.php in your browser to see the CMS.
```sh
cd quinnvissak.com/
npm start
```