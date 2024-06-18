import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB);
    const allContacts = JSON.parse(data);

    console.log(allContacts.length);
};

await countContacts();
