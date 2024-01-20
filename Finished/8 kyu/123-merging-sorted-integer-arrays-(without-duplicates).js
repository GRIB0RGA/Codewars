const mergeArrays = (a, b) => [...new Set([...a, ...b])].sort((a, b) => a - b);
