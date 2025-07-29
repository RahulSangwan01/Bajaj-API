const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const response = {
        is_success: true,
        user_id: "rahul_sangwan_12092004", 
        email: "rahul2126.be22@chitkara.edu.in", 
        roll_number: "2210992126", 
        even_numbers: [],
        odd_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: 0,
        concat_string: ""
    };

    let alphaOnly = [];

    data.forEach(item => {
        const strItem = String(item);
        if (!isNaN(strItem)) {
            const num = parseInt(strItem);
            if (num % 2 === 0) response.even_numbers.push(strItem);
            else response.odd_numbers.push(strItem);
            response.sum += num;
        } else if (/^[a-zA-Z]+$/.test(strItem)) {
            response.alphabets.push(strItem.toUpperCase());
            alphaOnly.push(strItem);
        } else {
            response.special_characters.push(strItem);
        }
    });

    let concat = alphaOnly.join("").split("").reverse();
    response.concat_string = concat.map((c, i) =>
        i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
    ).join("");

    response.sum = response.sum.toString();

    res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));