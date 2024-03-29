import passport from "passport";
import local from 'passport-local'
import {userModel} from "../models/user.js";
import { createHash, isValidPassword } from '../utils.js'

const LocalStrategy = local.Strategy;
const initializePasport = () => {
    passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;
        try {
            const exit = await userModel.findOne({email})
            if (exit) {
                console.log('El usuario ya existe');
                return done(null, false)
            };
            const newUser = {
                first_name,
                last_name,
                email,
                age, 
                password: createHash(password)
            }
            let result = await userModel.create(newUser);
            return done(null, result)
        } catch (error) {
            return done(`Error al crear usuario: ${error}`)
        }
    }))

    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await userModel.findOne({email:username})
            if (!user) {
                console.log('Userio no existe');
                return done(null, false);
            }
            if (!isValidPassword(user,password)) return done (null,false);
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user,done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id,done) => {
        let user = await userModel.findById(id); 
        done(null, user)
    })
}


export default initializePasport;