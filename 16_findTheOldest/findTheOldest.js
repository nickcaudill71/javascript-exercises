const findTheOldest = function(people) {
    return people.reduce((prevOldest, currentPerson) => {

        let oldAge;

        if ("yearOfDeath" in prevOldest) {
            oldAge = prevOldest.yearOfDeath - prevOldest.yearOfBirth;
        }
        else {
            oldAge = new Date().getFullYear() - prevOldest.yearOfBirth;
        }

        const newAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        const newOldest = newAge > oldAge ? currentPerson : prevOldest;
        return newOldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
