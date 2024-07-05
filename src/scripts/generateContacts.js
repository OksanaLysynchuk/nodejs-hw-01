import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const db = JSON.parse(data) || [];

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    db.push(...newContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
