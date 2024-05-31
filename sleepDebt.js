let day = 'monday'

function getSleepHours(day) {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 5;
        case 'friday':
            return 6;
        case 'saturday':
            return 10;
        case 'sunday':
            return 8;
        default:
            return 0;
    }
}

function getActualSleepHours() {
    return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'))
}

function getIdealSleepHours() {
    let idealHours = 7;
    return idealHours * 7;
}

console.log(getActualSleepHours())
console.log(getIdealSleepHours())

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    return actualSleepHours - idealSleepHours;
}

let sleepDebt = calculateSleepDebt()



function sleepRecomended() {
    if (sleepDebt === 0) {
        return 'You got the perfect amount of sleep.'
    } else if (sleepDebt > 0) {
        return `Your actual sleep is greater than the ideal sleep. You got ${sleepDebt} hours more sleep than you needed this week.`
    } else {
        let modulo = sleepDebt * -1
        return `Your actual sleep is less than the ideal sleep. You should get more rest.You got ${modulo} hours less sleep than you needed this week.`
    }
}

console.log(sleepRecomended())