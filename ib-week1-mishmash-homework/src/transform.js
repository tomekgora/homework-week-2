// use filter to make an array excluding records with age < 18
// work only with this new array with reduce()

// at the highest level this function should return an object
    // start working on prepData array of people > 18
    // I could sort the array by age first to make processing
    // easier later on --- maybe later.
    // console.log(prepData)
        // prepData - data pre-filtered for age < 18

function groupAdultsByAgeRange(data){
    // prepare data by making array of records with age > 18
    const filtered = data.filter(record => record.age >= 18)
    // console.log(filtered)

    const result = filtered.reduce(
        (groupedData, record) => {
            //group 20 and younger
            if (record.age <= 20) {
                if(!groupedData['20 and younger']) {
                    groupedData['20 and younger'] = []
                }
                groupedData['20 and younger'].push(record)
            }
                
            // group 21-30
            if (record.age > 20 && record.age <= 30) {
                if(!groupedData['21-30']) {
                    groupedData['21-30'] = []
                }                
                groupedData['21-30'].push(record)
            }

            // group 31-40
            if (record.age > 30 && record.age <= 40) {
                if(!groupedData['31-40']) {
                    groupedData['31-40'] = []
                }
                groupedData['31-40'].push(record)
            }

            // group 41-50
            if (record.age >40 && record.age <= 50) {
                if(!groupedData['41-50']) {
                    groupedData['41-50'] = []
                }
                groupedData['41-50'].push(record)
            }

            //group 51 and older
            if (record.age > 50) {
                if(!groupedData['51 and older']) {
                    groupedData['51 and older'] = []
                }
                groupedData['51 and older'].push(record)
            }            
            // console.log(groupedData)
            return groupedData

        },{} // This is the collector object corresponding to groupedData
    ) // reduce closed here
        return result
} // end of ageSort function



// Perhaps I could:
// sort the array by age, and split the resulting array at the first
// instance meeting new condition like age >20, age >30, age >41
//

module.exports = {groupAdultsByAgeRange}

           // if (record.age <=20) {
            //    return grouped['20 and younger'].push(record) 
            // } else if (record.age <=30) {
            //     return grouped['21-30'].push(record)
            // } else if (record.age <=40) {
            //   return  grouped['31-40'].push(record)
            // } else if (record.age <=50) {
            //   return  grouped['41-50'].push(record)
            // } else {
            //   return  grouped['51 and older'].push(rec0rd)
            // }


            // let group1 = prepData.filter(
            //     (record) => {return record.age <= 20}
            // )
            // if (group1 == true) {
            //     grouped['20 and younger'] = group1
            // }

// the result is in the form of:
//  {propertyGroup: [{},{}, {}, ...]}
// 
// Age ranges:
//              '20 and younger'
//              '21-30'
//              '31-40'
//              '41-50'
//              '51 and older'
//