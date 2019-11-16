// use filter to make an array excluding records with age < 18
// work only with this new array with reduce()

// prepData - data pre-filtered for age < 18

function groupAdultsByAgeRange(data) { 
    prepData = data.filter(
        (record) => {return record.age >18}
    )

    
}


module.exports = {groupAdultsByAgeRange}


// the result is in the form of:
//  {propertyGroup: [{},{}, {}, ...]}
// 