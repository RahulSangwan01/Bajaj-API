## 📌 Objective

Build and host a REST API (`POST /bfhl`) that:
- Accepts a JSON array as input
- Categorizes data into:
  - Odd numbers
  - Even numbers
  - Alphabets (converted to uppercase)
  - Special characters
- Calculates the sum of numeric values
- Returns the reversed alphabetical characters in alternating caps
- Responds with:
  - user ID in format: `full_name_ddmmyyyy`
  - email ID
  - college roll number
  - status of success

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Hosted on Render
- Git + GitHub for version control

---

## 🌐 Hosted API Endpoint

> 🔗 [https://bajaj-api-u3il.onrender.com/bfhl](https://bajaj-api-u3il.onrender.com/bfhl)  
> Method: `POST`  
> Route: `/bfhl`  
> Expected Status Code: `200`

---

## 📥 Sample Request

```json
POST /bfhl
Content-Type: application/json

{
  "data": ["2", "a", "b", "4", "5", "$", "&"]
}
