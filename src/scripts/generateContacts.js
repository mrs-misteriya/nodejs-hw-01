import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB);
    const allContacts = JSON.parse(data);

    for (let i = 0; i < number; i += 1) {
      const newContacts = createFakeContact();
      allContacts.push(newContacts);
    }

    try {
    await fs.writeFile( PATH_DB, JSON.stringify(allContacts, null, 2));
  } catch (err) {
    console.error('Помилка генерації контактів:', err);
    };
};

generateContacts(5);
