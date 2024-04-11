const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const userSchema = new Schema ( {
    username: {
       type: String,
       required: true,
       unique: true,
       lowercase: true
    },
    password: {
       type: String,
       required: true 
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
} )

// pre-save hook to encrypt user PWs on signup
// userSchema.pre( "save", function( next ) {
//     const user = this
//     if ( !user.isModified( "password" ) ) return next()
//     bcrypt.hash( user.password, 10, ( err, hash ) => {
//       if( err ) return next( err )
//       user.password = hash
//       next()
//     } )
//   } )
  
userSchema.pre("save", async function(next) {
  try {

      const user = this;
      if (!user.isModified("password")) return next();

      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      next();

  } catch (err) {
      next(err);
  }

});

  // method to check encrypted pw on login
  userSchema.methods.checkPassword = function( passwordAttempt, callback ) {
    bcrypt.compare( passwordAttempt, this.password, ( err, isMatch ) => {
      if( err ) return callback( err )
      return callback( null, isMatch )
    } )
  }

//   userSchema.methods.checkPassword = async function(passwordAttempt) {
//     try {
//         const isMatch = await bcrypt.compare(passwordAttempt, this.password);
//         return isMatch;
//     } catch (err) {
//         throw err;
//     }
// };
  
  // method to remove user's password for token/sending the response
  userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
  }

//   userSchema.methods.withoutPassword = async function() {
//     try {
//         const user = this.toObject();
//         delete user.password;
//         return user;
//     } catch (err) {
//         throw err;
//     }
// };

module.exports = mongoose.model( "User", userSchema )