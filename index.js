/* Your Code Here */

function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(createEmployeeRecord)
}

function createTimeInEvent(datetime) {
    let [date, hour] = datetime.split(" ")
    let event = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(event)
    return this
}

function createTimeOutEvent(datetime) {
    let [date, hour] = datetime.split(" ")
    let event = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(function(event) {return event.date === date}).hour
    let timeOut = this.timeOutEvents.find(function(event) {return event.date === date}).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find(function(employeeRecord) {return employeeRecord.firstName === firstName})
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(total, employeeRecord) {return total + allWagesFor.call(employeeRecord)},0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}