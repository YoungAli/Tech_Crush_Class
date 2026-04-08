// ============================================
// ONLINE BOOKSTORE ORDER - COMPLETE SOLUTION
// ============================================

// Task 1: Create Variables
const customer_Name = "Ali Prince Emmanuel";
const customer_Age = 50;
const book_Title = "How To Be a good programmer";
const book_Price = 5000;
const quantity = 3;
const is_Student = true;

// Task 2: Use Arithmetic Operators
const total_Price = book_Price * quantity;

// Task 3: Using the  Comparison Operators
const isAdult = customer_Age >= 18;
const buyingManyBooks = quantity > 3;
const isBookFiveThousand = book_Price === 5000;
// Task 4: Use a Non-Primitive Data Type (Object)
const customerOrder = {
    customerName: customer_Name,
    bookTitle: book_Title,
    quantity: quantity,
    totalPrice: total_Price
};
// Task 5: Print the Results
console.log("Customer Name: " + customerOrder.customerName,  "Book Title: " + customerOrder.bookTitle);
console.log("Total Price: " + customerOrder.totalPrice);
console.log("Is Customer an Adult? " + isAdult);
console.log("Buying More Than 3 Books? " + buyingManyBooks);
console.log("Is Book Price 5000? " + isBookFiveThousand);