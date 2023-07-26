const numberForamt = (str) => {
    return str.replace(/[^0-9.]/g, '') ?? 0;
};
numberForamt('TH220,000.500')
