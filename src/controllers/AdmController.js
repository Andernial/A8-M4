import {Adm} from "../model/AdmModel.js"

let Admins = []

export function insertAdmin(name, email, password, store){
    const newAdmin = new Adm(name, email, password, store);
    Admins.push(newAdmin);
    return newAdmin;
}

export function getAdminByEmail(email){
    const admin = Admins.find(data => data.email === email);
    return admin;
}

export {Admins}