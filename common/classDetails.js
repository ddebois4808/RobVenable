function StudySkills1Dates() {
    return [
        '-- Select One --',
        'July 14 - 17, 2:00pm - 3:30pm',
        'July 14 - 17, 4:00pm - 5:30pm',
        'July 21 - 24, 2:00pm - 3:30pm',
        'July 21 - 24, 4:00pm - 5:30pm',
    ]
}

function StudySkills2Dates() {
    return [
        '-- Not Available --',
    ]
}

function HighSchoolDates() {
    return [
        '-- Not Available --',
    ]
}

function ParentWorkshopDates() {
    return [
        '-- Select One --',
        'Thursday, July 24 (6:00pm - 7:30pm)',
        'Tuesday, July 29 (6:00pm - 7:30pm)',
        'Not Attending',
    ]
}

function StudySkills1Price()
{
    return '200.00'
}

function StudySkills2Price()
{
    let today = new Date().getTime();
    let priceExpire = new Date('06/01/2025').getTime();
    return today > priceExpire ? '165.00' : '150.00'
}

function HighSchoolPrice()
{
    return StudySkills2Price()
}

function SchoolYear()
{
    return '2025'
}