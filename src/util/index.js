import { READ_WORDS_PER_MINUTE } from '../constants/general';

/**
 * Filters out companies based on input filters
 *
 * The function gets an array of companies and an object of filters
 * as inputs. It loops through the array of companies and then 
 * for every item (company) it loops through the filters keys and if 
 * the company includes one property that fits the key's value, the
 * company is added to a results array (of filtered companies) which
 * will be returned at the end of the execution.
 *
 * @param {Object} companies  Array of companies. Example: 
 *                              [ 
 *                                { "company_id": 1, "company_name": "Deputy", ... }, 
 *                                { "company_id": 2, "company_name": "DropCar", ... },
 *                                ...
 *                              ]
 * @param {Object} filters    Object of filters. Example:
 *                              {
 *                                industry: ['Other', 'Services'],
 *                                location: ['Australia', 'England']
 *                              }  
 * 
 * @return {type}             Array of filtered companies (results). Example:
 *                              [ 
 *                                { "company_id": 4, "company_name": "Wildash", ... }, 
 *                                { "company_id": 7, "company_name": "Chat Time", ... }
 *                              ]
*/
export function filterCompanies(companies, filters) {
  const filterKeys = Object.keys(filters);
  return companies.filter(company => {
    return filterKeys.every(key => {
      if (!filters[key].length) {
        return true;
      }

      const option = company[key];

      if (option.constructor === Array) {
        for (let i = 0; i < option.length; i++) {
          if (filters[key].includes(option[i])) {
            return true;
          }
        }
        return false;
      } else {
        return filters[key].includes(company[key]);
      }
    });
  });
}

/**
 * Gets filter options and their occurrences from array of companies.
 *
 * The function gets an array of companies and a filter category as inputs.
 * Then it creates an empty object, it loops through the array and for every
 * item (company) it looks for a property named as the 'category' input, then 
 * adds that property to the empty object as a key and assigns it a value of 1, 
 * or if it already exists its value is incremented by 1. At the end, the 
 * function returns that object.
 *
 * @param {Object} companies  Array of companies. 
 *                            Example: 
 *                              [ 
 *                                { "company_id": 1, "company_name": "Deputy", ... }, 
 *                                { "company_id": 2, "company_name": "DropCar", ... },
 *                                ...
 *                              ]
 * @param {type}   category   Filter category. Example 'industry'.
 * 
 * @return {type}             Object with category values and occurrences.
 *                            Example:
 *                              {
 *                                Other: 2,
 *                                Services: 5
 *                              }
*/
export function getFilterOptions(companies = [], category) {
  let options = {};

  companies.map(company => {
    const option = company[category];
    let optionEntry = [];

    if (option.constructor === Array) {
      optionEntry = option;
    } else {
      optionEntry.push(option);
    }

    optionEntry.map(opt => {
      if (options[opt]) {
        options[opt]++;
      } else {
        options[opt] = 1;
      }
    });
  });

  return options;
}

/**
 * Gets read duration.
 *
 * This function calculates the duration of a read based on
 * a word count input and the average amount of words a person 
 * can read per minute.
 *
 * @param {Object} wordCount  Word count. 
 * 
 * @return {type}             Read duration in minutes.
*/
export function getReadDuration(wordCount) {
  return Math.ceil(wordCount / READ_WORDS_PER_MINUTE);
}

/**
 * Sorts array.
 *
 * Sorts array alphabetically.
 *
 * @param {Object} arr        Array. 
 * 
 * @return {type}             Sorted array.
*/
export function sortAlphabetically(arr) {
  return arr.sort(function(a, b) {
    let A = a.toUpperCase();
    let B = b.toUpperCase();
    return (A < B) ? -1 : (A > B) ? 1 : 0;
  });
}