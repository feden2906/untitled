// План на день. Синхронизация асинхронностей.


// callback


// let money = 0;
//
// function newDay(wakeup, cb) {
//     setTimeout(() => {
//         if (wakeup) {
//             cb(null, 'Wake up');
//             console.log('New day');
//         } else {
//             cb('sleep sleep sleep');
//         }
//     }, 500);
// }
//
// function breakfast(eatBreakfast, cb) {
//     setTimeout(() => {
//         if (eatBreakfast) {
//             cb(null, 'Ready to work!');
//         } else {
//             cb('Dont have a breakfast');
//             console.error('Im hungry. Cant work');
//         }
//     }, 200);
// }
//
//
// function goWork(myWork, cb) {
//     setTimeout(() => {
//         if (myWork) {
//             cb(null, 'I do my work');
//         } else {
//             cb('Not working today');
//         }
//     }, 1500);
// }
//
// function goToLanch(lanch, cb) {
//     setTimeout(() => {
//         if (lanch) {
//             cb(null, 'Im going to eat');
//         } else {
//             cb('I dont have a time for lanch');
//         }
//     }, 174);
// }
//
// function workFinish(money, cb) {
//     setTimeout(() => {
//         if (money) {
//             cb(null, 1000);
//         } else {
//             cb('Work is not done');
//         }
//     }, 600);
// }
//
// function buyFood(spending, cb) {
//     setTimeout(() => {
//         if (spending < 1000) {
//             cb(null, 'Buy some food');
//         } else {
//             cb('Money not enought');
//         }
//     }, 420);
// }
//
// function goHome(traffic, cb) {
//     setTimeout(() => {
//         if (traffic) {
//             cb(null, 'Way free. Go home!');
//         } else {
//             cb('Waiting 4 hours. And it is not finish...')
//         }
//     }, 1700);
// }
//
//
// newDay(true, (err, waking) => {
//     if (!err) {
//         console.log(waking);
//         breakfast(true, (err, bf) => {
//             if (!err) {
//                 console.log(bf);
//                 goWork(true, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         goToLanch(true, (err, goodEat) => {
//                             if (!err) {
//                                 console.log(goodEat);
//                                 workFinish(true, (err, data) => {
//                                     if (!err) {
//                                         money += data;
//                                         console.log(`I have ${money} today`);
//                                         buyFood(600, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 goHome(true, (err, data) => {
//                                                     if (!err) {
//                                                         console.log(data);
//                                                     } else {
//                                                         console.error(err);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.log('I want to buy some food, but...')
//                                                 console.error(err);
//                                             }
//                                         })
//                                     } else {
//                                         console.error(err);
//                                     }
//                                 })
//                             } else {
//                                 console.error(err)
//                             }
//                         })
//                     } else {
//                         console.error(err)
//                     }
//                 })
//             } else {
//                 console.log(err);
//             }
//         })
//     } else {
//         console.warn(err);
//     }
// });


// PROMISE


// function newDay(wakeup) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeup) {
//                 resolve('New day');
//             } else {
//                 reject('sleep sleep sleep');
//             }
//         }, 500);
//     })
// }
//
//
// function breakfast(eatBreakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eatBreakfast) {
//                 resolve ('Ready to work!');
//             } else {
//                 reject ('Im hungry. Cant work');
//             }
//         }, 200);
//     })
// }
//
//
// function goWork(myWork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (myWork) {
//                 resolve ('I do my work');
//             } else {
//                 reject ('Not working today');
//             }
//         }, 1500);
//     })
// }
//
// function goToLanch(lanch) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lanch) {
//                 resolve ('Im going to eat');
//             } else {
//                reject ('I dont have a time for lanch');
//             }
//         }, 174);
//     })
// }
//
// function workFinish(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money) {
//                 resolve(1000);
//             } else {
//                 reject('Work is not done');
//             }
//         }, 600);
//     })
// }
//
// function buyFood(spending) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (spending < 1000) {
//                 resolve ('Buy some food');
//             } else {
//                 reject ('Money not enought');
//             }
//         }, 420);
//     })
// }
//
// function goHome(traffic) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (traffic) {
//                 resolve ('Way free. Go home!');
//             } else {
//                 reject ('Waiting 4 hours. And it is not finish...')
//             }
//         }, 1700);
//     })
// }
//
// newDay(true)
// .then(value => {
//     console.log(value);
//     return breakfast(true);
// })
// .then(value => {
//     console.log(value);
//     return goWork(true);
// })
// .then(value => {
//     console.log(value);
//     return goToLanch(true);
// })
// .then(value => {
//     console.log(value);
//     return workFinish(true);
// })
// .then(value => {
//     console.log(value);
//     return buyFood(468);
// })
// .then(value => {
//     console.log(value);
//     return goHome(true);
// })
// .then(value => {
//     console.log(value);
// })
// .catch(reason => {
//     console.error(reason);
// })




// ASYNC


function newDay(wakeup) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeup) {
                resolve('New day');
            } else {
                reject('sleep sleep sleep');
            }
        }, 500);
    })
}


function breakfast(eatBreakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eatBreakfast) {
                resolve('Ready to work!');
            } else {
                reject('Im hungry. Cant work');
            }
        }, 200);
    })
}


function goWork(myWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (myWork) {
                resolve('I do my work');
            } else {
                reject('Not working today');
            }
        }, 1500);
    })
}

function goToLanch(lanch) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lanch) {
                resolve('Im going to eat');
            } else {
                reject('I dont have a time for lanch');
            }
        }, 174);
    })
}

function workFinish(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money) {
                resolve(1000);
            } else {
                reject('Work is not done');
            }
        }, 600);
    })
}

function buyFood(spending) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spending < 1000) {
                resolve('Buy some food');
            } else {
                reject('Money not enought');
            }
        }, 420);
    })
}

function goHome(traffic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (traffic) {
                resolve('Way free. Go home!');
            } else {
                reject('Waiting 4 hours. And it is not finish...')
            }
        }, 1700);
    })
}


async function result() {
    try {
        let myDay = await newDay(true);
        console.log(myDay);

        myDay = await breakfast(true);
        console.log(myDay);

        myDay = await goWork(true);
        console.log(myDay);

        myDay = await goToLanch(true);
        console.log(myDay);

        myDay = await workFinish(true);
        console.log(myDay);

        myDay = await buyFood(290);
        console.log(myDay);

        myDay = await goHome(false);
        console.log(myDay);

    } catch (err) {
        console.error(err);
    }
}

result();

