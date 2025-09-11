const express = require(`express`)
const router = express.Router();

//import posts controller
const postController = require(`../controller.js/postController`);

//(R)Index
router.get(`/`, postController.index)

//(c)reate
router.post(`/`, postController.store)

//(R)ead or Show
router.get(`/:id`, postController.show)

//(U)pdate
router.patch(`/:id`,postController.modify)

//(U)PUT
router.put(`/:id`,postController.update)

//(D)elete
router.delete(`/:id`,postController.destroy)

module.exports = router;