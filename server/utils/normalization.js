const normalizeStatus = (status) => {
    if (typeof status !== 'string') return 'active'; // safe default

    const value = status.trim().toLowerCase();

    if (value === 'active') return 'active';
    if (value === 'inactive') return 'inactive';

    throw new Error(`Invalid status value: ${status}`);
};

export default normalizeStatus;
