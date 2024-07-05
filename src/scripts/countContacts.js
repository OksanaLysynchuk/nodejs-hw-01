import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data) || [];
    return contacts.length;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return 0;
    } else {
      console.error('Error counting contacts:', error);
      throw error;
    }
  }
};

console.log(await countContacts());
