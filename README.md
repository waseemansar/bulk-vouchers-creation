# bulk-vouchers-creation

Express Js and Postgresql app.

### Requirements

* **Node** 10.0.0 or later
* **Postgres** Homebrew installation is recommended.
* **PostGIS** Homebrew installation is recommended.

### Installation

1. `npm install` to install Node dependencies
2. `npm run db-create && npm run migrate` to create development database
3. `NODE_ENV=test npm run db-create && NODE_ENV=test npm run migrate ` to create test database
4. `npm run dev` to run development environment

### How to use api
Once the server is running you can test api through http://localhost:8000/api/upload

* Pass a parameter named `file` along with your request to upload `.csv` file containing vouchers. You can find a file `vouchers.csv` containing 10 vouchers in docs folder.

* If vouchers successfully uploaded to database you will get api response with status code 201 like this: `{ "message": "File stored and vouchers created" }`

### Unit Test
This unit test will take a file containing vouchers from test folder then will read vouchers from csv file and then will create all vouchers in test database.

1. Run in root `node -e 'require("./util.js").createTestVoucherFile()'` this will create a vouchers.csv file with 10,000 vouchers in test folder.
2. Then run `npm test` for unit test to this feature.