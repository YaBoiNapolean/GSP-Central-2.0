import axios from "axios";

const api = axios.create({

    baseURL: "http://localhost:3000/api",

    withCredentials: true

});

export async function verifyGuild(guildId){

    const response = await api.post(

        "/discord/verify-guild",

        {

            guildId

        }

    );

    return response.data;

}