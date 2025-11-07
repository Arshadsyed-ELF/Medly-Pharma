const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/E-pharmacy', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });

// mongoose.connect(`mongodb+srv://arshad:arshad@cluster0.4lewudd.mongodb.net/Medly-pharma-DB`)
const uri = `mongodb+srv://arshad:arshad@cluster0.4lewudd.mongodb.net/Medly-pharma-DB`

mongoose.connect(uri)
  .then(() => console.log("Connected to studentsDB ✅"))
  .catch((err) => console.log("Error ❌", err));