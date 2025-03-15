const myFrierd = {
    alice: {
        name: 'alice',
        product: 'no mango',
        friend: {
            peggi: {
                name: 'peggi',
                product: 'no mango',
                friend: {
                    donald: {
                        name: 'donald',
                        product: 'no mango',
                        friend: {
                            maria: {
                                name: 'maria',
                                product: 'no mango',
                                friend: {
                                    ivan: {
                                        name: 'ivan',
                                        product: 'mango',
                                        friend: {},
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    bob: {
        name: 'bob',
        product: 'no mango',
        friend: {
            peggi: {
                name: 'peggi',
                product: 'no mango',
                friend: {
                    peter: {
                        name: 'peter',
                        product: 'mango',
                        friend: {},
                    },
                },
            },
            angun: {
                name: 'angun',
                product: 'no mango',
                friend: {},
            },
        },
    },
    clear: {
        name: 'clear',
        product: 'no mango',
        friend: {
            tom: {
                name: 'tom',
                product: 'no mango',
                friend: {},
            },
            jonni: {
                name: 'jonni',
                product: 'no mango',
                friend: {},
            },
        },
    },
};

// поиск в ширину по объекту

const breadhFirstSearch = (obj) => {
    const set = new Set();
    let findMango = false;
    let newObj = {};

    for (let key in obj) {
        if (!set.has(key)) {
            set.add(obj[key]);
        }
    }

    for (let value of set) {
        if (value.product === 'mango') {
            findMango = value.name;
            return findMango;
        }

        if (value.friend && Object.keys(value.friend).length !== 0) {
            newObj = { ...newObj, ...value.friend };
        }
    }

    if (newObj && Object.keys(newObj).length !== 0) {
        return breadhFirstSearch(newObj);
    } else {
        return findMango;
    }
};

console.log(breadhFirstSearch(myFrierd));

// поиск в глубину по объекту

const depthFirstSearch = (obj) => {
    let findMango = false;

    for (let key in obj) {
        if (obj[key].product === 'mango') {
            findMango = obj[key].name;
            return findMango;
        }

        if (Object.keys(obj[key].friend).length !== 0) {
            findMango = depthFirstSearch(obj[key].friend);
            if (findMango !== false) {
                return findMango;
            } else {
                continue;
            }
        }
    }

    return findMango;
};

console.log(depthFirstSearch(myFrierd));
