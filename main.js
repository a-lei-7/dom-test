const div = dom.find('#test>.red')[0]
console.log(div)

dom.style(div2, 'color', 'red')

const divList = dom.find('.red')
console.log(divList)

dom.each(divList, (n) => console.log(n))