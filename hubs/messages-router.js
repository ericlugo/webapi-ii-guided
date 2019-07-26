const express = require('express');
const Hubs = require('./hubs-model.js');

const router = express.Router();

router.get('/:id', async (request, response) => {
  const id = request.params.id;

  try {
    const message = await Hubs.findMessageById(id);
    console.log(message);
    message
      ? response.status(200).json({
          success: true,
          message,
        })
      : response.status(404).json({
          success: false,
          mesage: `Invalid Message ID`,
        });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      success: false,
      message: error,
    });
  }
});

module.exports = router;
