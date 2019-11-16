// use filter to make an array excluding records with age < 18
// work only with this new array with reduce()

// prepData - data pre-filtered for age < 18

function groupAdultsByAgeRange(data) { 
    prepData = data.filter(
        function(record) {
            return record.age
        }
         

    )





}

module.exports = {groupAdultsByAgeRange}


// the result is in the form of:
//  {propertyGroup: [{},{}, {}, ...]}
// 