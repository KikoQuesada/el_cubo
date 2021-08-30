const mongoose = require(mongoose);
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: 'An user name is required',
        minLength: [3, 'User name needs at least 3 characters']
    },
    surname: {
        type: String,
        required: 'An user surname is required',
        minLength: [3, 'User surname needs at least 3 characters']
    }
});

const User = userSchema.model('User', userSchema);
module.exports = User;