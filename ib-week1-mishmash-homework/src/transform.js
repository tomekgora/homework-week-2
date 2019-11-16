// use filter to make an array excluding records with age < 18
// work only with this new array with reduce()

// at the highest level this function should return an object


function groupAdultsByAgeRange(data) { 
    // prepData - data pre-filtered for age < 18
    prepData = data.filter(
        (record) => {return record.age >18}
    )
    // start working on prepData array of people > 18
    // I could sort the array by age first to make processing
    // easier later on --- maybe later.

    return prepData.reduce(
        function groupByAgeRange(){
            prepData.filter()
        },{}
    ) 
}


module.exports = {groupAdultsByAgeRange}


// the result is in the form of:
//  {propertyGroup: [{},{}, {}, ...]}
// 