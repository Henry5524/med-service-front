import DOMPurify from 'isomorphic-dompurify';

export const sanitizeHtml = (html: any) => {
  return DOMPurify.sanitize(html);
};