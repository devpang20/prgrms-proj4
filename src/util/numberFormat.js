export const numberFormat = (num) => {
    return new Intl.NumberFormat().format(num)
}