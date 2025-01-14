import { Schema, model } from 'mongoose';

export default model('Users', new Schema({
    firstName: {
        type: String,
        required: true //Nurodymas, jog reikšmė yra privaloma
    },
    lastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    channelName: String,
    userPhoto: String,
    coverPhoto: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, {
    virtuals: {
        videos: {
            options: {
                // Registruotas modelio pavadinimas mongoose objekte
                ref: 'Videos',
                // Videos modelyje patalpintas laukelis
                localField: '_id',
                // Users modelyje esanti laukelio userId reikšmė
                foreignField: 'userId',
                // Pasirinkimas ar norime tik vieno priskirto įrašo:
                justOne: false
            }
        }
    },
    toJSON: {
        virtuals: true
    }
}));