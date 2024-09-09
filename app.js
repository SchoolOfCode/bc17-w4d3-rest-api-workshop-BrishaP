import express from "express";
import helmet from 'helmet';


import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());
app.use(helmet());

app.disable('x-powered-by');

// Custom error handler to avoid revealing stack traces
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */



// Task 1
app.get('/astronauts', async (req, res) => {
  try {
    const astronauts = await getAstronauts();
    res.json({
      success: true,
      payload: astronauts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});

// Task 2
app.post('/astronauts', async (req, res) => {
  try {
    const newAstronaut = await createAstronaut(req.body);
    res.json({
      success: true,
      payload: newAstronaut
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});

// Task 3
app.get('/astronauts/:id', async (req, res) => {
  try {
    const astronaut = await getAstronautById(req.params.id);
    res.json({
      success: true,
      payload: astronaut
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});

// Task 4
app.put('/astronauts/:id', async (req, res) => {
  try {
    const updatedAstronaut = await replaceAstronautById(req.params.id, req.body);
    res.json({
      success: true,
      payload: updatedAstronaut
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});

// Task 5
app.delete('/astronauts/:id', async (req, res) => {
  try {
    const deletedAstronaut = await deleteAstronautById(req.params.id);
    res.json({
      success: true,
      payload: deletedAstronaut
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});

// Task 6
app.patch('/astronauts/:id', async (req, res) => {
  try {
    const updatedAstronaut = await updateAstronautById(req.params.id, req.body);
    res.json({
      success: true,
      payload: updatedAstronaut
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      payload: error.message
    });
  }
});
export default app;
