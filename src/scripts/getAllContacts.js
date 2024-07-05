import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data) || [];
    console.log(contacts);
    return contacts;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log([]);
      return [];
    } else {
      console.error('Error reading contacts:', error);
    }
  }
};

console.log(await getAllContacts());
