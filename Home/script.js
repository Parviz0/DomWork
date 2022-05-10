let body = document.querySelector('body')
let div = document.createElement('div')

let arr = [{
        id: Math.random(),
        course: 'Frontend dasturlash',
        days: "Вторник-Четверг-Суббота",
        time: '15.00 - 16.30',
        procent: 20
    },
    {
        id: Math.random(),
        course: 'Frontend',
        days: "Вторник-Четверг-Суббота",
        time: '9.00 - 10.30',
        procent: 77
    },
    {
        id: Math.random(),
        course: 'Курсы Гитары',
        days: "Вторник-Четверг-Суббота",
        time: '18.00 - 19.30',
        procent: 10
    },
    {
        id: Math.random(),
        course: 'Английский язык',
        days: "Понедельник -пятница",
        time: '17.00 - 18.30',
        procent: 40
    },
    {
        id: Math.random(),
        course: 'Ментальная арифметика',
        days: "Вторник-Суббота",
        time: '13.00 - 16.30',
        procent: 59
    },
    {
        id: Math.random(),
        course: 'Графический дизайн',
        days: "Вторник - четверг - суббота",
        time: '16.30 - 18.00',
        procent: 20
    },
    {
        id: Math.random(),
        course: 'Grafik Dizayn',
        days: "Понедельник - среда - пятница",
        time: '13.30 - 15.00',
        procent: 74
    },
    {
        id: Math.random(),
        course: 'Путь в Digital',
        days: "Понедельник - среда - пятница",
        time: '16.30 - 18.00',
        procent: 65
    },
    {
        id: Math.random(),
        course: '3D-modellashtirish',
        days: "Понедельник - среда - пятница",
        time: '10.30 - 12.00',
        procent: 25
    },
        {
            id: Math.random(),
            course: 'SMM',
            days: "Вторник-четверг-суббота",
            time: '18.00 - 19.30',
            procent: 0
        }
]


for (let item of arr) {
    let di = document.createElement('div')
    let h = document.createElement('h3')
    let fill = document.createElement('div')
    let vn = document.createElement('div')
    let days = document.createElement('p')
    let time = document.createElement('p')
    let button = document.createElement('button')

    h.innerHTML = item.course
    vn.classList.add('top')
    di.classList.add('item')
    fill.classList.add('fill')
    time.innerHTML = `Время: ${item.time}`
    days.innerHTML = `Дни: ${item.days}`
    button.innerHTML = 'Записаться'
    fill.style.width = `${item.procent}%`

    vn.append(fill)
    di.append(h, vn, days, time, button)
    div.append(di)


}

div.classList.add('dad')

body.prepend(div)