const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething()');
    doSomething();
    console.timeEnd('doSomething()')
}

measureDoingSomething();