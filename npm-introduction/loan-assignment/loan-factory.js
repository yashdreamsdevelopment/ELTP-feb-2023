export default (rate) => {
    return (p, n) => p * n * rate / 100;
}