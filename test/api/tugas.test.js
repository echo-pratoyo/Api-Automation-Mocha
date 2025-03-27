import fetch from "node-fetch"
import { expect } from "chai";
import Ajv from "ajv";
import schema_register from "../schemaregist/registerSchema.js";

describe("API Test Suite Tugas", function(){

    it("Get List <Resource>", async function(){
        // tembak url reqres
        const listResource = await fetch('https://reqres.in/api/unknown')

        
        // validasi http status nya harus 200
        expect(listResource.status).to.equal(200)

    });

    it(" Register ", async function(){
        const dataUser = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }

        const userRegister = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataUser)
        })

        expect(userRegister.status).to.equal(200)

        // validasi json schema
        const ajv = new Ajv()
        const data = await userRegister.json();
        const cekcek = ajv.compile(schema_register)
        const hasil_schema = cekcek(data)

        expect(hasil_schema).to.be.true
    });

    
})