const inc = () => ({ type: 'INC' }),
dec = () => ({ type: 'DEC' }),
rnd = () => {
    const random = Math.floor(Math.random()*10 + 1);
    return { type: 'RND', random };
};

export { inc, dec, rnd };