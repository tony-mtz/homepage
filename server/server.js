if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const path = require('path')
const express = require('express');
const session = require('express-session')
// const cors = require('cors')
// const passport = require('passport')
// const authRouter = require('./routes/auth')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//        origin: "http://localhost:8080", // allow to server to accept request from different origin
//        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//        credentials: true, // allow session cookie from browser to pass through
//  })
// );


app.use('/build', express.static(path.resolve(__dirname, '../build')));

// require('./auth/passport');

// /**
//  * Session
//  * 
//  * TODO: Add store (redis or mongo)
//  *       Add max age
//  *       Add cookie options
//  */
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave:false,
//   saveUninitialized:false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// //Router
// app.use('/auth', authRouter);

// app.get('/profile', checkAuthenticated, (req,res,next)=>{
//   console.log('at server profile user: ',req.session.passport.user)
//   res.json({'user': req.session.passport.user})
// });

/**
 * TODO: setup a global error handler
 */
app.use('/', (req,res, next)=>{
  console.log('fell to bottom')
  return next()
})


// function checkAuthenticated(req,res,next){
//   console.log('at checkAuthenticated')
//   console.log(req.isAuthenticated())
//   if (req.isAuthenticated()){
    
//     return next()
//   }
//   res.redirect('/auth/login')
// }

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at 3000`)
)
module.exports = app;