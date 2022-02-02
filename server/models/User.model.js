const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "A username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
    }, {timestamps: true});


    UserSchema.virtual('confirmPassword')
        .get( () => this._confirmPassword )
        .set( value => this._confirmPassword = value );

    UserSchema.pre('validate', function(next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Password must match confirm password');
        }
        next();
    });
    UserSchema.virtual('confirmEmail')
        .get( () => this._confirmEmail )
        .set( value => this._confirmEmail = value );

    UserSchema.pre('validate', function(next) {
        if (this.email !== this.confirmEmail) {
            this.invalidate('confirmEmail', 'Email must match Confirm Email');
        }
        next();
    });

    UserSchema.pre('save', function(next) {
        bcrypt.hash(this.password, 10)
            .then(hash => {
                this.password = hash;
                next();
            })
            .catch(err=>{
                console.log("Hashing password was unsuccessful", err)
                next()
            })
    });


    module.exports = mongoose.model('User', UserSchema)