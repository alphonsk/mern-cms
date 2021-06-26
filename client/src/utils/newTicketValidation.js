export const validateNewTicketForm = (str) => {
    return str.length < 1 || str.length > 9;
}