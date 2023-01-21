
const inc = () => ({ type: 'INC' }),
dec = () => ({ type: 'DEC' }),
rnd = (random) => ({ type: 'RND', random });

export { inc, dec, rnd };