import fs from 'fs/promises';

/**
 * Membaca dan parsing file CSV secara manual.
 * @param {string} filepath - Lokasi file CSV.
 * @returns {Promise<Array<Object>>} Data CSV dalam bentuk array of objects.
 */
export const readCSV = async (filepath) => {
    const content = await fs.readFile(filepath, 'utf-8');
    const lines = content
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    if (lines.length < 2) {
        throw new Error('File CSV tidak memiliki data.');
    }

    const headers = lines[0].split(',').map(h => h.trim());

    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj = {};

        headers.forEach((header, idx) => {
            obj[header] = values[idx] ?? null;
        });

        return obj;
    });
};
