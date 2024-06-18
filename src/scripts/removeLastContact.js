import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    const data = await fs.readFile(PATH_DB);
    const allContacts = JSON.parse(data);

    if (allContacts.length !== 0) {
       const deletedContact = allContacts.splice(allContacts.length-1, 1);
        await fs.writeFile( PATH_DB, JSON.stringify(allContacts, null, 2));
    } else {
        console.log('Контактів для видалення немає');
    }
};

removeLastContact();
