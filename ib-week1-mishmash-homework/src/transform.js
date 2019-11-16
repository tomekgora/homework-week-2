// use filter to make an array excluding records
// with age < 18
// work only with this new array with reduce()


function groupAdultsByAgeRange(data) {
    
    // First filter age > 18
    // Then sort objects into groups
    
    prepData = data.filter(
        function(record) {
            return record.age
        }
         

    )





}

module.exports = groupAdultsByAgeRange


// the result is in the form of:
//  {propertyGroup: [{},{}, {}, ...]}
// 