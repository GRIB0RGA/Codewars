const toCsvText = (array) => array.flatMap((x) => x.join(",")).join("\n");
