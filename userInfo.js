// userInfo.js

/**
 * Creates user profiles from original and modified names.
 * 
 * @param {string[]} originalNames 
 * @param {string[]} modifiedNames 
 * @returns {object[]} 
 */
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
    }));
  }
 
  const originalNames = ["Frosty", "Bob Marley", "Mamayie", "Goliath", "Saman"];
  const modifiedNames = ["frosty", "BOB MARLEY", "Mamayie", "GOLIATH", "saman"];
  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  console.log(userProfiles);
 