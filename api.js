const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api', (req, res) => {
    const data = req.body.data;
    const userId = req.body.user_id;
    const emailId = req.body.email_id;
    const collegeRollNo = req.body.college_roll_no;
    const evenNumbers = data.filter(num => num % 2 === 0);
    const oddNumbers = data.filter(num => num % 2 !== 0);
    const alphabetList = data.filter(char => typeof char === 'string' && /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());
    const response = {
        status: 'success',
        user_id: userId,
        email_id: emailId,
        college_roll_no: collegeRollNo,
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabet_list: alphabetList
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});