const express = require('express')

const app = express()
const PORT = 8000

app.get('/',  (req: any, res: { send: (arg0: string) => void; }) =>
    res.send(`Node and express serveris running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
)