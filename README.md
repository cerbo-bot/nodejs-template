# Node Js Project Template

## Setting up a new service
To setup a new service for cerbo in `express`, it is recommended to use this template. This will ensure structural and code consistancy between different services.

### Prerequisites
Setup node js, npm and yarn on your machine.
Recommended versions for each are:
Tools  | Version
----- | --------
Node  | v14.16.1 and higher :white_check_mark:
npm   | v6.14.12 and higher :white_check_mark:
yarn  | v1.22.10 and higher :white_check_mark:


### How to set up the project
- Clone this repo using command :
    ```sh
    git clone https://github.com/cerbo-bot/project-template.git
    ```

- Modify `package.json` file and set the service name.
- Rename `rename_to.env` file to `.env`. Keep all your secrets in the file and use `src/settings.js` to expose the variables.
- Set required `PORT` in `.env` file. By default it is set to **3000**.
- Do not forget to modify the remote origin before pushing to gihub.
- Run `yarn` command to fetch the node modules.

### :computer: Happy Coding. :octocat: 