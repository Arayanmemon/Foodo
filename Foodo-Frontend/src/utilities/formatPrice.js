const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
        currency: "PKR",
        style: "currency",
})

export function formatPrice(number) {
        return CURRENCY_FORMATTER.format(number)
}