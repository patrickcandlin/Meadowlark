const fortunes = [
    "Conquer your fears or they will conquer you.", 
    "Rivers need springs.", 
    "Do not fear what you don't know.",  
    "You will have a pleasant surprise.",  
    "Whenever possible, keep it simple."
]

exports.getFortune = () => {
    return fortunes[randomIndex(fortunes)]
}

const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
}