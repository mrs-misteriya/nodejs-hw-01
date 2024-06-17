import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    const removedData = await fs.writeFile(PATH_DB, JSON.stringify([]), "utf8");

    console.log(removedData);
};

removeAllContacts();
