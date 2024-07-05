import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    let db = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      db = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    const newContact = createFakeContact();

    db.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(db, null, 2));
    console.log('Contact added successfully');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
