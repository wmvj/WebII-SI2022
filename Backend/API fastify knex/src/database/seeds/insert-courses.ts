import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("courses").insert([
        { name: "CSS"},
        { name: "Java"},
        { name: "React"},
        { name: "Node"},
        { name: "Git"},
        { name: "GitHub"},
        { name: "Typescript"},
        { name: "Express.js"},
        { name: "Banco de dados"}    
    ]);
};
