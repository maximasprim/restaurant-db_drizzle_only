// import { createClient } from 'drizzle-orm';
// import db from "./drizzle/db";
// import {
//   restaurantTable,
//   categoryTable,
//   menuItemTable,
//   orderMenuItemTable,
//   stateTable,
//   addressTable,
//   cityTable,
//   commentTable,
//   driversTable,
//   orderStatusTable,
//   statusCatalogueTable,
//   ordersTable,
//   usersTable,
//   restaurantOwnerTable,
// } from './drizzle/schema'; // Replace with the actual path to your schema file

// // Create a client instance
// const client = createClient({
//   database: 'restaurant_db',
//   user: 'postgres',
//   password: 'maximas',
//   host: 'localhost',
//   port: 5432, // Default PostgreSQL port
// });

// async function insertData() {
//   // Insert data into the state table
//   const stateId = await client.insert(stateTable).values({
//     name: 'California',
//     code: 'CA',
//   });

//   // Insert data into the city table
//   const cityId = await client.insert(cityTable).values({
//     name: 'Los Angeles',
//     state_id: stateId,
//   });

//   // Insert data into the address table
//   const addressId = await client.insert(addressTable).values({
//     street_address_1: '123 Main St',
//     street_address_2: 'Apt 4',
//     zip_code: '90001',
//     delivery_instructions: 'Leave at the front door',
//     user_id: null, // Assuming a user ID will be inserted later
//     city_id: cityId,
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the users table
//   const userId = await client.insert(usersTable).values({
//     name: 'John Doe',
//     contact_phone: '1234567890',
//     phone_verified: true,
//     email: 'john.doe@example.com',
//     email_verified: true,
//     confirmation_code: 'CONF1234',
//     password: 'hashedPassword',
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the restaurant table
//   const restaurantId = await client.insert(restaurantTable).values({
//     name: 'The Great Restaurant',
//     street_address: '456 Elm St',
//     zip_code: '90002',
//     city_id: cityId,
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the category table
//   const categoryId = await client.insert(categoryTable).values({
//     name: 'Appetizers',
//   });

//   // Insert data into the menu_item table
//   const menuItemId = await client.insert(menuItemTable).values({
//     name: 'Fried Calamari',
//     restaurant_id: restaurantId,
//     category_id: categoryId,
//     description: 'Crispy fried calamari with a side of marinara sauce',
//     ingredients: 'Calamari, flour, oil, salt, pepper',
//     price: '12.99',
//     active: true,
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the orders table
//   const orderId = await client.insert(ordersTable).values({
//     restaurant_id: restaurantId,
//     estimated_delivery_time: new Date().toISOString(),
//     actual_delivery_time: null,
//     delivery_address_id: addressId,
//     user_id: userId,
//     driver_id: null, // Assuming a driver ID will be inserted later
//     price: '29.99',
//     discount: '0',
//     final_price: '29.99',
//     comment: 'No onions, please.',
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the order_menu_item table
//   await client.insert(orderMenuItemTable).values({
//     order_id: orderId,
//     menu_item_id: menuItemId,
//     quantity: 2,
//     item_price: '25.98',
//     price: new Date(),
//     comment: new Date(),
//   });

//   // Insert data into the comment table
//   await client.insert(commentTable).values({
//     order_id: orderId,
//     user_id: userId,
//     comment_text: 'The food was amazing!',
//     is_complaint: false,
//     is_praise: true,
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the drivers table
//   const driverId = await client.insert(driversTable).values({
//     car_make: 'Toyota',
//     car_model: 'Camry',
//     car_year: 2018,
//     user_id: userId,
//     online: true,
//     delivering: false,
//     created_at: new Date(),
//     updated_at: new Date(),
//   });

//   // Insert data into the order_status table
//   await client.insert(orderStatusTable).values({
//     order_id: orderId,
//     status_catalog_id: 1, // Assuming a status catalog ID will be inserted later
//     created_at: 'Order placed',
//   });

//   // Insert data into the status_catalog table
//   const statusCatalogId = await client.insert(statusCatalogueTable).values({
//     name: 'Order placed',
//   });

//   // Insert data into the restaurant_owner table
//   await client.insert(restaurantOwnerTable).values({
//     restaurant_id: restaurantId,
//     owner_id: userId,
//   });
// }

// insertData().catch((error) => {
//   console.error('Error inserting data:', error);
// });
