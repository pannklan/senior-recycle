const router = require("express").Router();
const MemberController = require("../controllers/member.controller");

// Member routes
router.post("/", MemberController.createMember);
router.get("/", MemberController.getAllMembers);
router.get("/:id", MemberController.getMemberById);
router.put("/:id", MemberController.updateMember);
router.delete("/:id", MemberController.deleteMember);

module.exports = router;
