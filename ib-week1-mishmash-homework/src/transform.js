// use filter to make an array excluding records with age < 18
// work only with this new array with reduce()

// at the highest level this function should return an object


function groupAdultsByAgeRange(data) { 
    // prepData - data pre-filtered for age < 18
    let prepData = data.filter(
        (record) => {return record.age >18}
    )
    // start working on prepData array of people > 18
    // I could sort the array by age first to make processing
    // easier later on --- maybe later.
    // console.log(prepData)
    let results = prepData.reduce(
        function groupByAgeRange(grouped, record){
            if (record.age <=20) {
                if (!grouped.hasOwnProperty('20 and younger')) {
                    grouped['20 and younger'] = []
                } 
                grouped['20 and younger'].push(record) 
                return grouped

            }else if (record.age <=30) {
                if (!grouped.hasOwnProperty('20-30')) {
                    grouped['20-30'] = []
                } 
                grouped['20-30'].push(record) 
                return grouped

            }else if (record.age <=40) {

            }else if (record.age <=50) {

            }else{

            }


                }
                grouped['20 and younger'].push(record) 
            } else if (record.age <=30) {
                 grouped['21-30'].push(record)
            } else if (record.age <=40) {
                grouped['31-40'].push(record)
            } else if (record.age <=50) {
                grouped['41-50'].push(record)
            } else {
                grouped['51 and older'].push(rec0rd)
            }
            return grouped
      
}



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