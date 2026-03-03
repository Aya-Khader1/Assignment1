var createCounter = function(init) {
    let count = init;
    function increment(){
        return  ++count;      
    }
    function decrement(){
        return   --count;      
    }
    function reset(){
        count = init;
        return count;      
    }
    return {
        increment,
        decrement,
        reset
    };  
};
const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement()); 
console.log(counter.reset()); 
console.log(counter.reset()); 




