import { CONTACT_TO_HREF } from '../constants'
export const getContactHref = (name: string, contact: string): string => {
  const href = CONTACT_TO_HREF[name] ? `${CONTACT_TO_HREF[name]}${contact}` : contact
  return href;
};
