console.log(1);

setTimeout(() => {
    console.log(2);
}, 2000);

console.log(3);



const asyncWithCallbacks = (successFn, errorFn) => {
    const duration = Math.random() * 5000;

    const db = [{ name: 'a' }, { name: 'b' }];
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            // success
            // return successFn(db);
            return successFn(db);
        }

        // failure
        // failureFn({message: 'something went wrong' });
        errorFn({ message: 'something went wrong' });
    }, duration);
}

const responseHandler = response => {
    console.log(response)
    console.log(response[0].name);
    asyncWithCallbacks(
        (s) => {
            asyncWithCallbacks(
                (s) => {
                    console.log(s);
                    asyncWithCallbacks(
                        (s) => {
                            console.log(e)
                        }
                    );
                }
            )
        },
        e => {}
    );
    // process the response
}

asyncWithCallbacks(
    responseHandler,
    error => console.log(error.message)
)

const asyncWithPromises = () => {
    // return a promise object
    return new Promise((resolve, reject) => {
        const duration = Math.random() * 5000;

        const db = [{ name: 'a' }, { name: 'b' }];
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                // success
                // return successFn(db);
                return resolve(db);
            }

            // failure
            // failureFn({message: 'something went wrong' });
            reject({ message: 'something went wrong' });
        }, duration);
    });
}

// const promiseObj = asyncWithPromises();

// promiseObj
//     .catch(error => console.log(error))
//     .then(response => {
//         console.log(response);
//         return asyncWithPromises();
//     }).then(r2 => {
//         console.log('second async with promises')
//     }).then(r3 => {
//         console.log('third', r3);
//     })
//     .finally(() => console.log('promise over'));


// prefered usage
const asyncWithAsyncAwait = async () => {
    try {
        const data = await asyncWithPromises();
        const data1 = await asyncWithPromises();
        const data2 = await asyncWithPromises();
        const data3 = await asyncWithPromises();
        console.log(data);
    } catch(e) {
        console.log(e);
    } finally {
        console.log('over');
    }
}

