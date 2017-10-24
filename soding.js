function get_fib(n) {
    if (n <= 0) {
        return 1;
    }

    return get_fib(n-1) + get_fib(n-2);
}

function fib(n) {
    /* Prevent user input less than 0 or more than 4 million */
    if (n < 0 || n >= 4000000) {
        return "Input out of range";
    }
    var result = [];
    var even_result = [];
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (get_fib(i) % 2 === 0) {
            even_result.push(get_fib(i));
            sum += get_fib(i);
        }
        result.push(get_fib(i));
    }

    console.log("Fibonacci(%d)", n, result);
    console.log("Even Fibonacci(%d)", n, even_result);
    console.log("Even Fibonacci(%d) result: ", n, sum);
    return sum;
}

fib(10);