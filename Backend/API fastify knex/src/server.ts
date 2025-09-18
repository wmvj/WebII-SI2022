import fastify from "fastify";
import { knex } from "./database/knex"

const app = fastify()

interface Course {
  id: number;
  name: string;
}

interface Module_Course {
  id: number;
  name: string;
  course_id: number
}


app.get('/', async (request, reply) => {
  return { message: "Hello" }
})

app.get('/courses', async (request, reply) => {
  const courses = await knex("courses").select().orderBy("name")
  return reply.status(201).send(courses)
})

app.post('/courses', async (request, reply) => {
  const { name } = request.body as Course
  await knex("courses").insert({ name })
  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])
  return reply.status(201).send({
    message: "Curso criado com sucesso"
  })
})

app.put('/courses/:id', async (request, reply) => {
  const { id } = request.params as Course
  const { name } = request.body as Course

  await knex("courses").update({ name }).where({ id })

  return reply.status(201).send({
    message: "Curso atualizado com sucesso"
  })
})

app.delete('/courses/:id', async (request, reply) => {
  const { id } = request.params as Course
  await knex("courses").delete().where({ id })

  return reply.status(201).send({
    message: "Curso excluído com sucesso"
  })
})

app.post('/modules', async (request, reply) => {
  const { name, course_id } = request.body as Module_Course
  await knex("course_modules").insert({ name, course_id })
  return reply.status(201).send({
    message: "Módulo do curso criado com sucesso"
  })
})

app.get('/modules', async (request, reply) => {
  const modules = await knex("course_modules").select()
  return reply.status(201).send(modules)
})


app.get('/courses/:id/modules', async (request, reply) => {
  const courses = await knex("courses")
    .select("course_modules.id",
      "course_modules.name AS module",
      "courses.name AS course")
    .join("course_modules", "courses.id", "course_modules.course_id")
  return reply.status(201).send(courses)
})


app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running")
})

