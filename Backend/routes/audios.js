const { Router } = require("express");
const router = Router();

const { getTrack, uploadTrack } = require('../controllers/audioController')

router.get("/:trackID", getTrack);

router.post('/', uploadTrack);

module.exports = router;
