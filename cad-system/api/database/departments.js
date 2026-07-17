const pool = require("./db");

async function getDepartments() {

    const result = await pool.query(

        `
        SELECT
            id,
            name,
            short_name,
            description,
            primary_color,
            secondary_color,
            logo,
            guild_id,
            created_at
        FROM departments
        ORDER BY name ASC
        `

    );

    return result.rows;

}

async function getDepartment(id) {

    const result = await pool.query(

        `
        SELECT *
        FROM departments
        WHERE id=$1
        `,

        [id]

    );

    return result.rows[0];

}

async function createDepartment(data) {

    const result = await pool.query(

        `
        INSERT INTO departments
        (

            name,
            short_name,
            description,
            primary_color,
            secondary_color,
            logo,
            guild_id

        )

        VALUES

        (

            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7

        )

        RETURNING *

        `,

        [

            data.name,
            data.short_name,
            data.description,
            data.primary_color,
            data.secondary_color,
            data.logo,
            data.guild_id

        ]

    );

    return result.rows[0];

}

async function updateDepartment(id,data){

    const result=await pool.query(

        `

        UPDATE departments

        SET

            name=$1,
            short_name=$2,
            description=$3,
            primary_color=$4,
            secondary_color=$5,
            logo=$6

        WHERE id=$7

        RETURNING *

        `,

        [

            data.name,
            data.short_name,
            data.description,
            data.primary_color,
            data.secondary_color,
            data.logo,
            id

        ]

    );

    return result.rows[0];

}

async function deleteDepartment(id){

    await pool.query(

        `
        DELETE FROM departments
        WHERE id=$1
        `,

        [id]

    );

}

module.exports={

    getDepartments,
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment

};