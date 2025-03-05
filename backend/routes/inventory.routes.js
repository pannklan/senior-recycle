const router = require("express").Router();
const InventoryController = require("../controllers/inventory.controller");

router.post("/", InventoryController.createInventory);
router.get("/", InventoryController.getAllInventory);
router.get("/:id", InventoryController.getInventoryById);
router.put("/:id", InventoryController.updateInventory);
router.delete("/:id", InventoryController.deleteInventory);

module.exports = router;
