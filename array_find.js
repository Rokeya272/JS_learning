let movie = [
    'The Fntastic Mr.Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
]

const select = movie.find(select =>{
    return select.includes('Mrs');///indicates the string includes mrs
}
);

const select2 = movie.find(select =>{
    return select.indexOf('Mrs')=== 0;//indicates the string includes mrs in first position
}
);

