import path from 'path';
import { readCSV } from '../libs/readCSV.js';

const apiKey = process.env.API_KEY;

/**
* Handler API untuk mendapatkan semua data provinsi.
*/
export const getAllProvinsi = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/provinsi.csv');
        const data = await readCSV(filePath);

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
}

/**
* Handler API untuk mendapatkan data provinsi berdasarkan ID.
*/
export const getProvinsiById = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];
        const { id } = req.params;

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/provinsi.csv');
        const result = await readCSV(filePath);

        const data = result.filter((item) => item.id === id);

        if (!data) {
            return res.status(404).json({
                status: false,
                message: 'Data provinsi tidak ditemukan.'
            });
        }

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
};

/**
* Handler API untuk mendapatkan semua data kabupaten.
*/
export const getAllKabupaten = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/kabupaten.csv');
        const data = await readCSV(filePath);

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
}

/**
* Handler API untuk mendapatkan data kabupaten berdasarkan ID.
*/
export const getKabupatenById = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];
        const { id } = req.params;

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/kabupaten.csv');
        const result = await readCSV(filePath);

        const data = result.filter((item) => item.id_provinsi === id);

        if (!data) {
            return res.status(404).json({
                status: false,
                message: 'Data kabupaten tidak ditemukan.'
            });
        }

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
};

/**
* Handler API untuk mendapatkan semua data kecamatan.
*/
export const getAllKecamatan = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/kecamatan.csv');
        const data = await readCSV(filePath);

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
}

/**
* Handler API untuk mendapatkan data kecamatan berdasarkan ID.
*/
export const getKecamatanById = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];
        const { id } = req.params;

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/kecamatan.csv');
        const result = await readCSV(filePath);

        const data = result.filter((item) => item.id_kabupaten === id);

        if (!data) {
            return res.status(404).json({
                status: false,
                message: 'Data kecamatan tidak ditemukan.'
            });
        }

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
};

/**
* Handler API untuk mendapatkan semua data kelurahan.
*/
export const getAllKelurahan = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/kelurahan.csv');
        const data = await readCSV(filePath);

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
}

/**
* Handler API untuk mendapatkan data kelurahan berdasarkan ID.
*/
export const getKelurahanById = async (req, res) => {
    try {
        const key = req.headers['x-api-key'];
        const { id } = req.params;

        if (!key || key !== apiKey) {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized. Invalid API key.'
            });
        }

        const filePath = path.resolve('assets/data/kelurahan.csv');
        const result = await readCSV(filePath);

        const data = result.filter((item) => item.id_kecamatan === id);

        if (!data) {
            return res.status(404).json({
                status: false,
                message: 'Data kelurahan tidak ditemukan.'
            });
        }

        return res.status(200).json({
            status: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Gagal memproses permintaan. Silahkan coba lagi nanti!',
            error: error.message
        });
    }
};