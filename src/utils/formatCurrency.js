export const ToCurrency = (num = 0) => {
    return new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: 'currency',        
    }).format(num);
}