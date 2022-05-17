<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Markets Center - Client

<p align="right">
  <img height="200" src="https://user-images.githubusercontent.com/86481813/168854600-5f78aaca-b87a-406d-813f-1095d8cd7879.png"/>
</p>

## About
This project consists of the development of a S.P.A (Single Page Application). It is part of the Bootcamp Henry group project, in which a group of 7 developers participated. On this page, you can access as a seller and thus create, edit and delete products that are for sale and view your sales history.
As a buyer you have access to a favorites section, shopping cart, profile with your data and purchase history, you can also make purchases using the Stripe payment gateway. Finally, the admin actor will be able to keep track of the categories, the purchases made and the users.

## Objectives
- Create a profile with your data.
- Create, edit, delete and search products.
- Filter by categories and sellers.
- Sort alphabetically and by price.
- Add products to the shopping cart and buy them.
- Add products to the favorite list.
- Add comments and rating to a bought product.
- Manage users, categories, orders and see statistics graphic of seller orders in admin profile.

## Stack of Technologies
Javascript, React, Redux, Material UI, FireBase, Stripe

### Deploy: <a href="https://markets-center.vercel.app/" target="_blank">`https://markets-center.vercel.app/`</a>

## BoilerPlate

You must have to create a file called: `.env` 
that has the following form: 

```
REACT_APP_API=localhost
REACT_APP_FIREBASE_API_KEY=firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=firebase_auth_domain
REACT_APP_FIREBASE_STORAGE_BUCKET=firebase_storage_bucket
REACT_APP_FIREBASE_PROJECT_ID=firebase_project_id
REACT_APP_FIREBASE_MESSAGING_ID=firebase_messaging_id
REACT_APP_FIREBASE_APP_ID=firebase_app_id
STRIPE_API_KEY=stripe_api_key
```
REACT_APP_API port must be the same as api.

## Next 
### _Connect the data base_

 - Go to api of Markets Center and run it. Replace all `.env` information with database information

 ### _Install the necesary package to run it_

- Open the project console
    + Inside `client` folder, run the command line, `npm install`.

### _Run the project_

- Open the project console    
    + Inside `client` folder, run the command line, `npm start` and go to `http://localhost:3000/`. 

## Project Screens
<p align="center">Home</p>
<p align="center">
<a href='https://markets-center.vercel.app/' width='30%'/><img src='https://user-images.githubusercontent.com/86481813/167896551-3e477602-6ae5-48a8-a0ce-bbc368761090.png' width='75%'/></a>
<a href="https://markets-center.vercel.app/"><img src='https://user-images.githubusercontent.com/86481813/167896680-e6407325-97d8-44f0-b011-077d468012d3.png' width='18%'/></a>
</p>
