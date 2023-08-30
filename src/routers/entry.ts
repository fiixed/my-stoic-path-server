import { Router } from "express";
import { createEntry, deleteEntry, getAllEntries, getSingleEntry, updateEntry } from "../controllers/entry";

const router = Router();

router.get('/', getAllEntries);
router.get('/:entryId', getSingleEntry);
router.post('/create', createEntry);
router.patch('/:entryId', updateEntry);
router.delete('/:entryId', deleteEntry);

export default router;