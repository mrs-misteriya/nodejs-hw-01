import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {

    const data = await fs.readFile(PATH_DB);
    const allContacts = JSON.parse(data);

    const newContact = createFakeContact();
    allContacts.push(newContact);

  try {
    await fs.writeFile( PATH_DB, JSON.stringify(allContacts, null, 2));
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  };
};

addOneContact();
