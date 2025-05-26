import express from 'express';
import {
    getProvinsiById,
    getKabupatenById,
    getKecamatanById,
    getKelurahanById,
    getAllProvinsi,
    getAllKabupaten,
    getAllKecamatan,
    getAllKelurahan
} from '../controllers/wilayahController.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Wilayah API' });
});

router.get('/provinsi', getAllProvinsi);
router.get('/provinsi/:id', getProvinsiById);

router.get('/kabupaten', getAllKabupaten);
router.get('/kabupaten/:id', getKabupatenById);

router.get('/kecamatan', getAllKecamatan);
router.get('/kecamatan/:id', getKecamatanById);

router.get('/kelurahan', getAllKelurahan);
router.get('/kelurahan/:id', getKelurahanById);

export default router;