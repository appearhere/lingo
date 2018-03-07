/* global __TERMS__:true */

export const departments = __TERMS__
  .reduce((acc, { department }) => {
    if (acc.indexOf(department) === -1) acc.push(department);
    return acc;
  }, [])
  .sort();

export default __TERMS__;
