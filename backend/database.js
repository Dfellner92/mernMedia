const mongoose = require('mongoose');

const connection = "mongodb+srv://dfellner:<12131992>@<cluster>/<mernMedia>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));