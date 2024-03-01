function StudySkills1Dates() {
    return [
        '-- Select One --',
        'July 8 - 11, 2:00pm - 3:30pm',
        'July 8 - 11, 4:00pm - 5:30pm',
        'July 15 - 18, 2:00pm - 3:30pm',
        'July 15 - 18, 4:00pm - 5:30pm',
    ]
}

function StudySkills2Dates() {
    return [
        '-- Select One --',
        'July 15 - 18, 2:00pm - 3:30pm',
    ]
}

function HighSchoolDates() {
    return [
        '-- Select One --',
        'July 15 - 18, 4:00pm - 5:30pm',
    ]
}

function ParentWorkshopDates() {
    return [
        '-- Select One --',
        'Thursday, July 18 (6:00pm - 7:30pm)',
        'Tuesday, July 23 (6:00pm - 7:30pm)',
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
    let priceExpire = new Date('06/01/2024').getTime();
    return today > priceExpire ? '165.00' : '150.00'
}

function HighSchoolPrice()
{
    return StudySkills2Price()
}

function SchoolYear()
{
    return '2024'
}